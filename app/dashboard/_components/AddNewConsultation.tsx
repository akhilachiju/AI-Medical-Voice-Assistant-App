"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

interface AddNewConsultationProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddNewConsultation({ isOpen, onClose }: AddNewConsultationProps) {
  const [symptoms, setSymptoms] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-gray-900/90 border border-blue-600/80 rounded-2xl py-6 px-6 shadow-xl shadow-blue-600/30 backdrop-blur-xl max-w-md w-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-50 p-2 rounded-full bg-gray-800 border border-blue-600/50 hover:bg-gray-700 transition-colors shadow-lg"
        >
          <X className="w-4 h-4 text-white" />
        </button>
        
        {/* Content */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white mb-4">Add Basic Details</h3>
          
          <div className="w-full mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Describe symptoms or concerns:
            </label>
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="Enter patient symptoms, concerns, or consultation notes..."
              className="w-full h-85 px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 w-full">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Cancel
            </Button>
            <Button
              disabled={!symptoms.trim()}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              Next<ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewConsultation;
