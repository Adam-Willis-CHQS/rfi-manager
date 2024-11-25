'use client';

import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-green-200">
      <div className="p-10 bg-white rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in" // Redirect users to the sign-in page if they already have an account
          forceRedirectUrl="/projects" // Enforces redirection to /projects after signing up
          appearance={{
            elements: {
              formButtonPrimary: 'bg-green-600 hover:bg-green-700 text-white',
              card: 'bg-white shadow-md rounded-lg',
            },
          }}
        />
      </div>
    </div>
  );
}
