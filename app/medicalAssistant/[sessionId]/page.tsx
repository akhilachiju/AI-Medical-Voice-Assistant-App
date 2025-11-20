"use client";

import { useParams } from "next/navigation";

export default function MedicalAssistantSession() {
  const params = useParams();
  const sessionId = params.sessionId as string;

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">
          Medical Assistant Session
        </h1>
        <p className="text-gray-400 mb-4">Session ID: {sessionId}</p>
        
        {/* Add your medical assistant interface here */}
      </div>
    </div>
  );
}
