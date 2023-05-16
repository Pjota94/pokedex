"use client";

import { Search as Lupa } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <form
      onSubmit={() => router.push(`${name}`)}
      className="w-[248px] h-[38px] flex items-center"
      action={`${name}`}
    >
      <input
        className="w-[215px] pl-[14px] mr-[5px] h-[38px] bg-[#EBF3F5] border border-[#2E305769] rounded-lg focus:outline-none text-sm text-[#2E3057]"
        type="text"
        placeholder="name or number"
        value={name}
        onChange={(e) => {
          const lowerCase = e.target.value.toLowerCase();
          setName(lowerCase);
        }}
      />
      <button
        className="h-[38px] bg-[#2E3057] text-white font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-[#2E3057E0]"
        type="submit"
      >
        <Lupa size={20} strokeWidth={1.5} className="ml-2 mr-2 text-white" />
      </button>
    </form>
  );
}
