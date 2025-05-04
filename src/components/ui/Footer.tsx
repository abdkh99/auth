import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 tracking-wider uppercase">
              About
            </h3>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              A modern and secure authentication system built with Next.js and
              NextAuth.js
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/profile"
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Profile
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 tracking-wider uppercase">
              Connect
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-base text-gray-400 dark:text-gray-500 text-center">
            © {new Date().getFullYear()} SecureAuth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
