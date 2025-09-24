"use client"
import { useState } from "react";
export default function CourseCTA({ course }) {
  const [isMentorRedirectModalOpen, setIsMentorRedirectModalOpen] =
    useState(false);
  return (
    <section className="section cta-section">
      <div className="section-header">
        <h2 className="section-title">Are you an expert in {course}?</h2>
      </div>
      <p className="section-subtitle">
        Join our team of experienced mentors and help others build their digital
        literacy skills.
      </p>
      <button
        onClick={() => setIsMentorRedirectModalOpen(true)}
        className="cta-button"
      >
        Work with Us
      </button>

      {isMentorRedirectModalOpen ? (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Work with Us</h3>
              <i
                onClick={() => setIsMentorRedirectModalOpen(false)}
                className="fas fa-x modal-close-button"
              ></i>
            </div>
            <p className="modal-description">
              Thank you for your interest in becoming a mentor! Please contact
              us at <strong>mentors@evolve.com</strong> with your resume and a
              brief description of your experience to get started.
            </p>
            <div className="text-right mt-4">
              <button
                onClick={() => setIsMentorRedirectModalOpen(false)}
                className="cta-button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
