"use client";

import { SignUp } from "@clerk/nextjs";

export default function CustomSignUp() {
  return (
    <SignUp
      routing="hash"
      afterSignUpUrl="/dashboard"
      appearance={{
        variables: {
          colorPrimary: "#1d4ed8",
        },
        elements: {
          rootBox: "w-full",
          card: "shadow-none border-0 bg-transparent"
        }
      }}
      signInUrl="/sign-in"
      redirectUrl="/dashboard"
    />
  );
}
