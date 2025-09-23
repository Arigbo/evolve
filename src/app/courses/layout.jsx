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
      ) : (
        <div className="layout">
          <NavCrumbs/>
          {children}</div>
      )}
    </>
  );
}
