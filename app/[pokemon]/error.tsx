/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const router = useRouter();

  return (
    <div>
      <h1 className="text-4xl text-center mt-36">This pokemon doesn't exist</h1>
      <div className="w-full flex justify-center mt-10">
        <button
          className="h-12 w-56 bg-[#2E3057] text-white font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-[#2E3057E0]"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => router.push("/")
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
