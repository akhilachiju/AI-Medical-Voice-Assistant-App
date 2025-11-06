import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 md:px-10 lg:px-20 py-10 md:py-14 bg-transparent">
      {/* Outer glassy card container */}
      <div
        className="         
          bg-gray-900/40 
          border border-blue-600/80 
          rounded-2xl 
          py-3 sm:py-4 md:py-6
          px-3 sm:px-4 md:px-6
          shadow-md shadow-blue-600/30 
          backdrop-blur-xl 
          transition-all duration-300 
          hover:shadow-blue-700/50
          flex items-center justify-center
        "
      >
        <SignUp
          appearance={{
            variables: {
              colorPrimary: "#1d4ed8",
            },
          }}
          signInUrl="/sign-in"
          afterSignUpUrl="/dashboard"
          redirectUrl="/dashboard"
        />
      </div>
    </div>
  );
}
