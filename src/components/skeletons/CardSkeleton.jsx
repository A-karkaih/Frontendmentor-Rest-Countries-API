export function CardSkeleton() {
  return (
    <div className="w-full max-w-62.5 rounded-md overflow-hidden bg-white dark:bg-gray-700 shadow">
      {/* Flag skeleton */}
      <div className="w-full h-37.5 bg-gray-200 dark:bg-gray-600 animate-pulse" />
      
      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-3/4" />
        <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-full" />
        <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-5/6" />
      </div>
    </div>
  );
}