import AuthPageModal from "@/app/(auth)/AuthPageModal";
import CustomSignUp from "@/app/(auth)/CustomSignUp";

export default function SignUpPage() {
  return (
    <AuthPageModal>
      <CustomSignUp />
    </AuthPageModal>
  );
}
