import React, { useState, useEffect, useRef } from 'react';
export const AIChatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const callGeminiApi = async (userQuery, history) => {
    const chatHistory = history.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    const systemPrompt = "You are a helpful and friendly course assistant chatbot. Keep your answers concise and accurate. Use Google Search to find current information.";
    const apiKey = ""; 
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const payload = {
      contents: chatHistory,
      tools: [{ "google_search": {} }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    let resultText = "Sorry, I couldn't get a response. Please try again.";
    
    for (let i = 0; i < 3; i++) { // Exponential backoff retry
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const result = await response.json();
        const candidate = result.candidates?.[0];
        
        if (candidate && candidate.content?.parts?.[0]?.text) {
          resultText = candidate.content.parts[0].text;
          break; // Success, break retry loop
        } else {
            throw new Error("Invalid API response structure.");
        }
      } catch (error) {
        if (i < 2) {
          const delay = Math.pow(2, i) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
        } else {
          console.error("Gemini API call failed after retries:", error);
        }
      }
    }
    return resultText;
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const newMessages = [...messages, { text: userMessage, sender: 'user' }];

    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    const aiResponse = await callGeminiApi(userMessage, newMessages);

    setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
    setIsLoading(false);
  };

  return (
    <div className="chatbot-container">
          <style>
    {`
    /* Global Reset and Font */
    body {
        margin: 0;
        font-family: 'Inter', sans-serif;
        transition: background-color 0.3s;
    }

    /* --- Page Container (Dark Mode controlled by data-theme) --- */
    .page-container {
        min-height: 100vh;
        background-color: #f9fafb; /* gray-50 */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        color: #111827; /* gray-900 */
        line-height: 1.5;
        font-size: 1rem;
    }

    /* Dark Mode Page Styles */
    .page-container[data-theme="dark"] {
        background-color: #111827; /* gray-900 */
        color: #f9fafb; /* gray-50 */
    }

    /* --- Modal Overlay --- */
    .modal-overlay {
        position: fixed;
        inset: 0;
        z-index: 50;
        background-color: rgba(17, 24, 39, 0.85); /* gray-900 with high opacity */
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        transition: opacity 0.3s ease;
    }

    /* --- Modal Content --- */
    .modal-content {
        background-color: white;
        border-radius: 0.75rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        width: 100%;
        max-width: 28rem;
        transform: scale(1);
        transition: all 0.3s ease;
        overflow: hidden;
    }

    /* Dark Mode Modal Content */
    .page-container[data-theme="dark"] .modal-content {
        background-color: #1f2937; /* gray-800 */
    }

    /* --- Modal Header --- */
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid #e5e7eb; /* gray-200 */
    }
    .page-container[data-theme="dark"] .modal-header {
        border-bottom: 1px solid #374151; /* gray-700 */
    }

    .modal-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: #111827;
        display: flex;
        align-items: center;
    }
    .page-container[data-theme="dark"] .modal-title {
        color: white;
    }
    .modal-title-icon {
        color: #4f46e5; /* indigo-600 */
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.5rem;
    }

    /* --- Modal Body --- */
    .modal-body {
        padding: 1.5rem;
        color: #374151; /* gray-700 */
        max-height: 80vh; /* Added to prevent modal content from flowing off-screen */
        overflow-y: auto;
    }
    .page-container[data-theme="dark"] .modal-body {
        color: #d1d5db; /* gray-300 */
    }

    /* Close Button in Header and Theme Toggle */
    .close-button {
        background: none;
        border: none;
        color: #9ca3af; /* gray-400 */
        padding: 0.25rem;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.15s, color 0.15s;
    }
    .close-button:hover {
        background-color: #f3f4f6; /* gray-100 */
        color: #4b5563; /* gray-600 */
    }
    .page-container[data-theme="dark"] .close-button:hover {
        background-color: #374151; /* gray-700 */
        color: #d1d5db; /* gray-300 */
    }

    /* --- Profile Summary Section (Avatar, Name, Email, Type) --- */
    .profile-summary {
        display: flex;
        align-items: center;
        gap: 1.5rem; /* spacing between avatar and details */
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
    }

    .user-avatar {
        width: 5rem; /* w-20 */
        height: 5rem; /* h-20 */
        border-radius: 50%; /* rounded-full */
        object-fit: cover;
        border: 3px solid #4f46e5; /* indigo-600 ring */
        box-shadow: 0 0 0 2px white; /* inner shadow for contrast */
    }
    .page-container[data-theme="dark"] .user-avatar {
        box-shadow: 0 0 0 2px #1f2937; /* inner shadow for contrast in dark mode */
    }

    .profile-details {
        flex-grow: 1;
    }

    .profile-name {
        font-size: 1.125rem; /* lg */
        font-weight: 700;
        margin: 0;
        color: #111827;
    }
    .page-container[data-theme="dark"] .profile-name {
        color: white;
    }

    .profile-email {
        font-size: 0.875rem; /* sm */
        color: #4b5563; /* gray-600 */
        margin: 0.25rem 0 0.5rem 0;
    }
    .page-container[data-theme="dark"] .profile-email {
        color: #9ca3af; /* gray-400 */
    }

    /* User Type Badge */
    .user-type-badge {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px; /* full rounded */
        font-size: 0.75rem; /* xs */
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    /* Dynamic Badge Colors */
    .user-type-mentor { background-color: #fcd34d; color: #92400e; }
    .user-type-student { background-color: #60a5fa; color: #1e40af; }
    .user-type-tutor { background-color: #a7f3d0; color: #065f46; }

    /* --- Divider --- */
    .divider {
        border: none;
        height: 1px;
        background-color: #e5e7eb; /* gray-200 */
        margin: 1.5rem 0;
    }
    .page-container[data-theme="dark"] .divider {
        background-color: #374151; /* gray-700 */
    }

    /* --- Courses Section --- */
    .courses-section {
        margin-bottom: 1.5rem;
    }

    .courses-heading {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: #111827;
    }
    .page-container[data-theme="dark"] .courses-heading {
        color: white;
    }

    .course-list {
        list-style: none;
        padding: 0;
        margin: 0;
        max-height: 10rem; /* Limit height for scrollability */
        overflow-y: auto;
        border: 1px solid #e5e7eb; /* gray-200 */
        border-radius: 0.5rem;
    }
    .page-container[data-theme="dark"] .course-list {
        border-color: #374151; /* gray-700 */
    }

    .course-item {
        padding: 0.75rem 1rem;
        font-size: 0.875rem;
        color: #374151;
        border-bottom: 1px solid #f3f4f6; /* light gray separator */
    }
    .page-container[data-theme="dark"] .course-item {
        color: #d1d5db;
        border-bottom: 1px solid #1f2937; /* darker separator */
    }
    .course-item:last-child {
        border-bottom: none;
    }

    /* Action Area */
    .action-area {
        margin-top: 1.5rem;
    }

    /* --- Main App Content Styles --- (Kept for completeness) */
    .text-center { text-align: center; }
    .main-title {
        font-size: 2.25rem; /* 3xl */
        line-height: 2.5rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
    }
    .main-description {
        font-size: 1.125rem; /* lg */
        color: #4b5563; /* gray-600 */
        margin-bottom: 2rem;
        max-width: 40rem;
        margin-left: auto;
        margin-right: auto;
    }
    .page-container[data-theme="dark"] .main-description {
        color: #9ca3af; /* gray-400 */
    }

    /* --- Open Modal Button --- */
    .open-button {
        padding: 0.75rem 1.5rem;
        background-color: #4f46e5; /* indigo-600 */
        color: white;
        font-weight: 600;
        border: none;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        cursor: pointer;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
    .open-button:hover {
        background-color: #4338ca; /* indigo-700 */
        transform: scale(1.05);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
    }
    .open-button-icon {
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.5rem;
    }

    /* Modal Action Button (Now used for 'Manage Full Settings') */
    .modal-action-button {
        width: 100%;
        padding: 0.5rem 1rem;
        background-color: #4f46e5; /* indigo-600 */
        color: white;
        font-weight: 500;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: background-color 0.15s;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal-action-button:hover {
        background-color: #4338ca; /* indigo-700 */
    }

    /* ---------------------------------------------------------------------- */
    /* --- CHATBOT STYLES --- */
    /* ---------------------------------------------------------------------- */

    .chatbot-container {
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
        z-index: 40; /* Lower than modal overlay (50) */
        display: flex;
        flex-direction: column;
        transition: transform 0.3s ease;
    }

    .chatbot-window {
        background-color: white;
        border-radius: 0.75rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        width: 100%;
        max-width: 20rem;
        height: 25rem;
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
        border: 1px solid #e5e7eb; /* gray-200 */
        overflow: hidden;
    }
    .page-container[data-theme="dark"] .chatbot-window {
        background-color: #1f2937; /* gray-800 */
        border-color: #374151; /* gray-700 */
    }

    .chat-header {
        padding: 0.75rem;
        background-color: #4f46e5; /* indigo-600 */
        color: white;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top-left-radius: 0.6rem;
        border-top-right-radius: 0.6rem;
    }
    .chat-header-icon {
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.5rem;
    }
    
    .chat-messages {
        flex-grow: 1;
        padding: 0.75rem;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        background-color: #f9fafb; /* light background for chat area */
    }
    .page-container[data-theme="dark"] .chat-messages {
        background-color: #111827; /* dark background for chat area */
    }

    .message {
        max-width: 85%;
        padding: 0.5rem 0.75rem;
        border-radius: 0.75rem;
        line-height: 1.4;
        font-size: 0.875rem;
    }

    .user-message {
        align-self: flex-end;
        background-color: #4f46e5; /* indigo-600 */
        color: white;
        border-bottom-right-radius: 0;
    }

    .ai-message {
        align-self: flex-start;
        background-color: #e5e7eb; /* gray-200 */
        color: #1f2937; /* gray-800 */
        border-bottom-left-radius: 0;
    }
    .page-container[data-theme="dark"] .ai-message {
        background-color: #374151; /* gray-700 */
        color: #f9fafb; /* gray-50 */
    }

    .chat-input-area {
        padding: 0.5rem;
        border-top: 1px solid #e5e7eb;
        display: flex;
        gap: 0.5rem;
    }
    .page-container[data-theme="dark"] .chat-input-area {
        border-top: 1px solid #374151;
    }

    .chat-input {
        flex-grow: 1;
        padding: 0.5rem;
        border: 1px solid #d1d5db;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        outline: none;
        transition: border-color 0.2s;
        resize: none;
        max-height: 5rem;
    }
    .chat-input:focus {
        border-color: #4f46e5; /* indigo-600 */
    }
    .page-container[data-theme="dark"] .chat-input {
        background-color: #1f2937;
        color: white;
        border-color: #4b5563;
    }

    .send-button {
        background-color: #4f46e5;
        color: white;
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem;
        cursor: pointer;
        transition: background-color 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
    }
    .send-button:hover:not(:disabled) {
        background-color: #4338ca;
    }
    .send-button:disabled {
        background-color: #9ca3af;
        cursor: not-allowed;
    }
    
    .chat-toggle-button {
        background-color: #4f46e5;
        color: white;
        border: none;
        border-radius: 50%;
        width: 3.5rem;
        height: 3.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto; /* Align to the right */
    }
    .chat-toggle-button:hover {
        background-color: #4338ca;
        transform: scale(1.05);
    }
    
    .loading-dot {
        width: 0.5rem;
        height: 0.5rem;
        background-color: white;
        border-radius: 50%;
        display: inline-block;
        margin: 0 0.1rem;
        animation: loading-pulse 1.2s infinite ease-in-out;
    }
    .loading-dot:nth-child(2) {
        animation-delay: 0.2s;
    }
    .loading-dot:nth-child(3) {
        animation-delay: 0.4s;
    }
    @keyframes loading-pulse {
        0%, 80%, 100% { transform: scale(0); }
        40% { transform: scale(1.0); }
    }

    /* Responsive adjustments */
    @media (max-width: 600px) {
        .chatbot-container {
            bottom: 0.5rem;
            right: 0.5rem;
        }
        .chatbot-window {
            max-width: calc(100vw - 1rem);
            height: 75vh;
        }
    }
    `}
  </style>
      {isChatOpen && (
        <div className="chatbot-window">
          {/* Chat Header */}
          <div className="chat-header">
            <div style={{ display: 'flex', alignItems: 'center' }}>
<i className="fas fa-message"></i>
              Course Assistant AI
            </div>
            <button
              className="close-button"
              onClick={() => setIsChatOpen(false)}
              aria-label="Close Chatbot"
              style={{ color: 'white' }}
            >
            <i className="fas fa-x"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.length === 0 && (
                <div className="ai-message">
                    Hello! I'm your AI course assistant. How can I help you with your studies or account today?
                </div>
            )}
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}-message`}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="message ai-message">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form className="chat-input-area" onSubmit={handleSend}>
            <textarea
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(e);
                }
              }}
              placeholder="Ask a question..."
              disabled={isLoading}
              rows={1}
            />
            <button type="submit" className="send-button" disabled={!input.trim() || isLoading}>
          <i className="fas fa-airplane"></i>
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        className="chat-toggle-button" 
        onClick={() => setIsChatOpen(prev => !prev)}
        aria-label={isChatOpen ? "Hide Chatbot" : "Open Chatbot"}
      >
        {isChatOpen ? <i className='fas fa-x'></i> : <i className='fas fa-message'></i>}
      </button>
    </div>
  );
};