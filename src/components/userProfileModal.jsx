import React, { useEffect, useRef, useState } from "react";
const mockUser = {
  name: "Alexander Smith",
  email: "alexander.smith@uni.edu",
  type: "Mentor", // Try changing this to 'Student' or 'Tutor' to see badge color change!
  imageUrl: "https://placehold.co/128x128/4f46e5/ffffff?text=AS", // Profile Image URL
  courses: [],
};
export default function UserProfileModal({ title = "User Profile" }) {
  const modalRef = useRef(null);

  //   // Close modal on Escape key press
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(false);
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!mockUser) {
    return null;
  }

  const { name, email, type, imageUrl, courses } = mockUser;
  const userTypeClass = `user-type-badge user-type-${type.toLowerCase()}`;

  return (
    <>
      <style>
        {`
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

 
    `}
      </style>
      <div
        className="modal-overlay"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h2 id="modal-title" className="modal-title">
              {title}
            </h2>
            <i className="fas fa-x"></i>
          </div>
          {/* Modal Body (Content) */}
          {loading ? (
            <div className="modal-body">
              {/* Section 1: Avatar, Name, Email, Type */}
              <div className="profile-summary">
                <img
                  src={imageUrl}
                  alt={`${name}'s profile picture`}
                  className="user-avatar"
                  // Fallback for image loading error
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/128x128/4f46e5/ffffff?text=U";
                  }}
                />
                <div className="profile-details">
                  <h3 className="profile-name">{name}</h3>
                  <p className="profile-email">{email}</p>
                  <div className={userTypeClass}>{type}</div>
                </div>
              </div>

              <hr className="divider" />

              {/* Section 2: Courses List */}
              <div className="courses-section">
                <h4 className="courses-heading">
                  Courses{" "}
                  {type === "Student" ? "Undertaking" : "Registered Under"} (
                  {courses.length})
                </h4>

                {courses.length > 0 ? (
                  <ul className="course-list">
                    {courses.map((course, index) => (
                      <li key={index} className="course-item">
                        {course}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="content-user-detail">
                    No courses currently listed.
                  </p>
                )}
              </div>

              <hr className="divider" />

              {/* Section 3: Action Button (Settings) */}
              <div className="action-area">
                <button className="modal-action-button">
                  Manage Full Settings
                </button>
              </div>
            </div>
          ) : (
            <div className="userloading">
              <span
                className="text-gradient"
                style={{
                  width: "24px",
                  height: "24px",
                  border: "3px solid #ccc",
                  borderTop: "3px solid",
                  borderRadius: "50%",
                  marginRight: "1rem",
                  animation: "spin 1s linear infinite",
                  display: "inline-block",
                }}
              />
              <h1 className="text-gradient">Evolve</h1>
              <style>{`
                            @keyframes spin {
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); }
                            }
                        `}</style>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
