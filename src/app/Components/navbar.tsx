import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Link href="/">Home</Link>
      <a href="/posts?q=type">Posts</a>
      <Link href="/about">About</Link>
      <Link href="/about/us">About US</Link>
      <Link href="/about/someone">About Someone</Link>
    </div>
  );
}
