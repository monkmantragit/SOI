// Admin keeps its own loading boundary. The root loading.tsx was removed so that
// notFound()/redirect() return correct HTTP status codes across the public site;
// this segment-level boundary restores the Suspense boundary the admin pages need
// (e.g. useSearchParams in /admin/content/new).
export default function AdminLoading() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-[#8B5C9E]/20 border-t-[#8B5C9E] rounded-full animate-spin"></div>
        <p className="text-[#8B5C9E] font-medium">Loading...</p>
      </div>
    </div>
  );
}
