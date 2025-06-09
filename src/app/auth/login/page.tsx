"use client";
import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/authContext'; 



export default function LoginPage() {

    const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful login (replace with real API logic)
    login();
    router.push('/');
  };

  return (
    <main className="min-h-screen grid grid-cols-1 pt-16 md:grid-cols-2">
      {/* Left side */}
      <div className="relative bg-[var(--primary-color)] flex items-center justify-center p-6 card-texture-bg2"
      
      >
        <Link href="/" className="absolute top-6 left-6">
          <HomeIcon className="h-10 w-10 text-white" />
        </Link>
        <Image
          src="/logos/WhiteMployusRecruitmentLogo2.png"
          alt="Mployus Logo"
          width={220}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-sm">
          <h3 className="text-2xl font-semibold text-center text-[var(--primary-color)] mb-8">Login</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <Link href="#" className="text-sm text-[var(--primary-color)] hover:underline">
                Forgot Password
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[var(--primary-color)] hover:bg-(--primary-400) text-white font-medium py-2.5 rounded-md transition"
            >
              Login
            </button>
          </form>

          {/* Register */}
          <p className="text-sm text-center text-gray-700 mt-6">
            Don’t have an account?{' '}
            <Link href="/auth/signup" className="text-[var(--primary-color)] font-medium hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}