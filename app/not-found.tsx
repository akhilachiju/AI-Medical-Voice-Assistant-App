import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center p-8">
        <h2 className="text-4xl font-bold text-white mb-4">404</h2>
        <p className="text-gray-400 mb-6">Page not found</p>
        <Link 
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
