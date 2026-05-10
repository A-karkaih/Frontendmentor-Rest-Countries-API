import { useNavigate } from "react-router-dom";

export  function DetailError({error}) {
  const navigate = useNavigate();
  return (
     <main className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {error}
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 "
          >
            Back to Home
          </button>
        </div>
      </main>
  )
}
