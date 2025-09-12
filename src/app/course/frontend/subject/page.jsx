"use client";
import React, { useContext, useState } from "react";
import { Context } from "@/components/content";
export default function SubjectPage() {
  const { setIsModalOpen } = useContext(Context);
  const [isModalOpen, setIsModalOpenLocal] = useState(false);
  const [currentSubject, setCurrentSubject] = useState(null);

  return (
    <div>
      {/* Your component JSX goes here */}
    </div>
  );
}