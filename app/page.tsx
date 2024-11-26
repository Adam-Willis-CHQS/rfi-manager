// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Modern Dark Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-white text-xl font-bold">RFI Manager</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/sign-in" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </Link>
              <Link 
                href="/sign-up" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Streamline Your RFI Process
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Efficiently manage and track your Requests for Information in one centralized platform.
          </p>
          <div className="space-x-4">
            <Link
              href="/sign-up"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Get Started
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors text-lg font-medium border border-gray-600"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </main>

      {/* Optional Features Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Real-Time Updates
              </h3>
              <p className="text-gray-400">
                Get instant notifications and track RFI status changes in real-time.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Collaborative Workspace
              </h3>
              <p className="text-gray-400">
                Work together with your team in a shared environment.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Project Analytics
              </h3>
              <p className="text-gray-400">
                Track project progress and analyze response times.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
