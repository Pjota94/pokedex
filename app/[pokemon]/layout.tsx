import Link from "next/link";

export const metadata = {
  title: "Pokemon",
  description: "Page pokemon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
