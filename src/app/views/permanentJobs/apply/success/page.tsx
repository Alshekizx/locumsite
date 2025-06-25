// success/page.tsx

'use client';

import { useRouter } from 'next/navigation';
import React from 'react';


const SuccessPage = () => {
  const router = useRouter();

  return (
    <div className="max-w-md mx-auto py-40 px-4 text-center space-y-6">
      <h1 className="text-2xl font-semibold text-[--color-primary]">Application Submitted!</h1>
      <p className="text-[--color-text-muted]">Your application has been submitted successfully.</p>

      <div className="space-y-4">
        <button
          onClick={() => router.push('/myApplications')}
          className="w-full button"
        >
          View Application
        </button>
        <button
          onClick={() => router.push('/')}
          className="w-full button bg-gray-100 text-[--color-text]"
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;