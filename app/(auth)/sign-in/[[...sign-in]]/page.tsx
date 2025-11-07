import { SignIn } from "@clerk/nextjs";
import AuthPageModal from "@/app/_components/AuthPageModal";

export default function SignInPage() {
  return (
    <AuthPageModal>
      <SignIn
        routing="hash"
        afterSignInUrl="/dashboard"
        appearance={{
          variables: {
            colorPrimary: "#1d4ed8",
          },
          elements: {
            rootBox: "w-full",
            card: "shadow-none border-0 bg-transparent"
          }
        }}
        signUpUrl="/sign-up"
      />
    </AuthPageModal>
  );
}
