'use client';

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="p-10 bg-white rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome Back</h2>
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up" // Redirect to sign-up if the user doesn't have an account
          fallbackRedirectUrl="/projects" // Redirect after successful sign-in
          appearance={{
            elements: {
              formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
              card: 'bg-white shadow-md rounded-lg',
            },
          }}
        />
      </div>
    </div>
  );
}
