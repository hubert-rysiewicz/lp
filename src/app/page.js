import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <Link href="dashboard">
        <button className="btn btn-primary">Dashboard</button>
      </Link>
    </div>
  );
}
