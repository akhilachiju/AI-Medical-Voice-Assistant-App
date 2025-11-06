import { SignUp } from "@clerk/nextjs";
import AuthPageModal from "@/app/_components/AuthPageModal";

export default function SignUpPage() {
  return (
    <AuthPageModal>
      <SignUp
        routing="hash"
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
        afterSignUpUrl="/dashboard"
        redirectUrl="/dashboard"
      />
    </AuthPageModal>
  );
}
