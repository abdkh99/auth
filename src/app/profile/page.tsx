"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    redirect("/login");
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Profile
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Your account information
            </p>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <dl className="divide-y divide-gray-200 dark:divide-gray-700">
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                  {session?.user?.name || "Not set"}
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Email
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                  {session?.user?.email || "Not set"}
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Registration Date
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                  {new Date().toLocaleDateString("en-US")}
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
