"use client";
import { NavCrumbs } from "@/components/navCrombs";
import React, { useEffect, useState } from "react";
export default function SingleCourseLayout({
  currentSubject,
  closeModal,
  children,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 60);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "120px",
            fontSize: "1.2rem",
            color: "#555",
            fontWeight: "500",
            background: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          <span
            className="spinner"
            style={{
              width: "24px",
              height: "24px",
              border: "3px solid #ccc",
              borderTop: "3px solid #0070f3",
              borderRadius: "50%",
              marginRight: "1rem",
              animation: "spin 1s linear infinite",
              display: "inline-block",
            }}
          />
          Loading courses...
          <style>{`
                            @keyframes spin {
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); }
                            }
                        `}</style>
        </div>
      ) : (
        <div className="layout">
          <NavCrumbs></NavCrumbs>
          {children}
        </div>
      )}
    </>
  );
}
