import Link from "next/link";

export const metadata = {
  title: "Pokemon",
  description: "Primeiro app Next 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <section className="flex justify-center mt-10">
        <Link href="/">
          <button className="bg-slate-950 text-cyan-50 p-3 rounded-lg hover:bg-slate-600 transition duration-300 ease-in-out">
            Voltar
          </button>
        </Link>
      </section>
    </div>
  );
}
