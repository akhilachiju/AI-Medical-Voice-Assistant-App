"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useUser } from "@clerk/nextjs";

interface UserData {
  id: number;
  clerkId: string;
  name: string;
  email: string;
  credits: number;
  isPaid: boolean;
  lastCreditReset: Date | null;
}

interface UserContextType {
  userData: UserData | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
  decrementCredit: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    if (!user) {
      setUserData(null);
      setLoading(false);
      return;
    }

    // console.log("Fetching user from API...");
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
      // console.log("User fetched from API:", data.user);
      setUserData(data.user);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const decrementCredit = () => {
    if (userData && userData.credits > 0) {
      setUserData({ ...userData, credits: userData.credits - 1 });
    }
  };

  return (
    <UserContext.Provider value={{ userData, loading, refreshUser: fetchUser, decrementCredit }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserData() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserData must be used within UserProvider");
  }
  return context;
}
