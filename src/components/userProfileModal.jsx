import React, { useEffect, useRef, useState } from "react";
const mockUser = {
  name: "Alexander Smith",
  email: "alexander.smith@uni.edu",
  type: "Mentor", // Try changing this to 'Student' or 'Tutor' to see badge color change!
  imageUrl: "https://placehold.co/128x128/4f46e5/ffffff?text=AS", // Profile Image URL
  courses: [],
};
export default function UserProfileModal({ setUserModal,title = "User Profile" }) {
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
      <div
        className="modal-overlay"
        ref={modalRef}
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h2 id="modal-title" className="modal-title">
              {title}
            </h2>
            <i className="fas fa-x" onClick={()=>setUserModal(false)}></i>
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
