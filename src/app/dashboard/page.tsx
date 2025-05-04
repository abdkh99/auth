"use client";

import { Button } from "@/components/ui/Button";

export default function DashboardPage() {
  // بيانات وهمية
  const user = {
    name: "John Doe",
    email: "john@example.com",
    role: "User",
    status: "Active",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text ">
                Dashboard
              </h1>
            </div>
            <div className="flex items-center">
              <Button onClick={() => {}} variant="outline" size="sm">
                Sign out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Welcome, {user.name}!
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                        {user.name[0].toUpperCase()}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {user.name}
                      </h3>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="text-sm font-medium text-gray-500">
                        Role
                      </h4>
                      <p className="mt-1 text-lg font-semibold text-gray-900">
                        {user.role}
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="text-sm font-medium text-gray-500">
                        Status
                      </h4>
                      <p className="mt-1 text-lg font-semibold text-green-600">
                        {user.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
