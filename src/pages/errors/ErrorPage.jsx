import { useNavigate } from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center space-y-6 max-w-md">
        {/* 404 Number */}
        <h1 className="text-9xl font-black text-gray-800 dark:text-gray-200">
          404
        </h1>

        {/* Message */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Sorry, the page you're looking for doesn't exist.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center pt-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Home
          </button>
        </div>
      </div>
    </main>
  );
}