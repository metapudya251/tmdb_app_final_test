import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-3 justify-center">
      <h1 className="text-3xl font-bold">Welcome to my Home Page</h1>
      <div className="bg-green-300 px-4 py-2 rounded-md">
        <Link href={`/movies`}>
          <div>
            <p className="text-black">Go To Movie Page</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
