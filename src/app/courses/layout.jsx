"use client";
import { NavCrumbs } from "@/components/navCrombs";
import React, { useEffect, useState } from "react";
export default function SingleLayout({ currentSubject, closeModal, children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loading">
          <span
            className=""
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
        <div className="layout">{children}</div>
      )}
    </>
  );
}
