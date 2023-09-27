import Link from "next/link";
import SearchBox from "./SearchBox";

export default function Navbar() {
  return (
    <div>
      <Link href="/">Home</Link>
      <a href="/posts?q=type">Posts</a>
      <Link href="/about">About</Link>
      <Link href="/about/us">About US</Link>
      <Link href="/about/someone">About Someone</Link>
      <SearchBox
        dataQaSelector="event_discovery_header_search"
        placeholder="Search for events"
      />
    </div>
  );
}
