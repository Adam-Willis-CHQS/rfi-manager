// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">RFI Manager</h1>
      <p className="text-lg text-center mb-6 max-w-xl">
        Streamline Your RFI Process. Efficiently manage and track your Requests for Information in one centralized platform.
      </p>
      <div className="space-x-4">
        <Link href="/sign-in">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md">Sign In</button>
        </Link>
        <Link href="/sign-up">
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
