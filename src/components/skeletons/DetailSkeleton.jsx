export function DetailSkeleton() {
  return (
    <main className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="animate-pulse space-y-6">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 w-32 rounded" />
          <div className="grid grid-cols-2 gap-8">
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 w-1/2 rounded" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 w-full rounded" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 w-3/4 rounded" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
