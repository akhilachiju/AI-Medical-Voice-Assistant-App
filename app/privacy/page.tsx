import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-transparent border border-blue-700 hover:border-blue-700 rounded-2xl shadow-md p-8 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
          VCare Privacy Policy
        </h1>
        <p className="text-gray-300 text-sm text-center mb-8">
          Effective Date: <span className="font-medium">[01-01-2025]</span>
        </p>

        <section className="space-y-6 dark:text-neutral-400 leading-relaxed">
          <p>
            Welcome to <strong>VCare – AI Medical Voice Assistant</strong>
            {" "} (“VCare,” “we,” “us,” or “our”). We empower healthcare professionals
            with seamless, voice-driven documentation. Your privacy and data
            protection are our top priorities.
          </p>

          <h2 className="text-xl font-semibold dark:text-neutral-400 mt-8">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Voice & Audio Data:</strong> Audio recordings and transcripts
              generated during patient interactions.
            </li>
            <li>
              <strong>User Information:</strong> Name, email, and professional credentials.
            </li>
            <li>
              <strong>Device Data:</strong> Browser, IP address, and usage analytics.
            </li>
            <li>
              <strong>Patient Data:</strong> Encrypted and handled in compliance with HIPAA
              and GDPR standards.
            </li>
          </ul>

          <h2 className="text-xl font-semibold dark:text-neutral-400 mt-8">
            2. How We Use Information
          </h2>
          <p>
            We use the collected information to deliver transcription, summarization,
            and AI-driven documentation services; improve system accuracy; ensure
            security and compliance; and communicate with users. We never sell or
            share identifiable information for marketing purposes.
          </p>

          <h2 className="text-xl font-semibold  dark:text-neutral-400mt-8">
            3. Data Security
          </h2>
          <p>
            VCare uses industry-leading encryption (TLS in transit, AES-256 at rest).
            Access to data is restricted to authorized personnel only. We maintain
            compliance with HIPAA, GDPR, and SOC 2 standards.
          </p>

          <h2 className="text-xl font-semibold dark:text-neutral-400 mt-8">
            4. Your Rights
          </h2>
          <p>
            Depending on your region, you may have rights to access, modify, delete,
            or export your data. To exercise these rights, please contact us at{" "}
            <a
              href="mailto:support@vcare.ai"
              className="text-blue-600 hover:underline"
            >
              support@vcare.ai
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold dark:text-neutral-400 mt-8">
            5. Data Retention
          </h2>
          <p>
            We retain data only for as long as necessary to deliver our services
            and meet legal obligations. You can permanently delete your recordings
            or account upon request.
          </p>

          <h2 className="text-xl font-semibold dark:text-neutral-400 mt-8">
            6. Updates to This Policy
          </h2>
          <p>
            This Privacy Policy may be updated periodically. When we make changes,
            we will notify users through the app or email. Continued use of VCare
            after updates constitutes acceptance of the revised policy.
          </p>

          <h2 className="text-xl font-semibold dark:text-neutral-400 mt-8">
            7. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please
            contact us:
          </p>
          <ul className="list-none pl-0">
            <li>📧 <a href="mailto:support@vcare.test" className="text-blue-600 hover:underline">support@vcare.test</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
