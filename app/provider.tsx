"use client";
import React, { useEffect, useCallback } from "react";
import { useUser } from "@clerk/nextjs";

export default function Provider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();

  const createNewUser = useCallback(async () => {
    if (!user) return;
    
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clerkId: user.id,
          name: user.fullName || user.firstName || "User",
          email: user.primaryEmailAddress?.emailAddress,
        }),
      });
      
      const data = await response.json();
     // console.log("User data:", data);
      
      if (!response.ok) {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }, [user]);

  useEffect(() => {
    createNewUser();
  }, [createNewUser]);

  return <>{children}</>;
}
