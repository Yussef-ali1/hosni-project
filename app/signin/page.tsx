'use client';

import { useState } from 'react';
import SignInForm from "../components/SignInForm"

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto space-y-8">
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Form content */}
        </form>
      </div>
    </div>
  );
}

