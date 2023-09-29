import SearchList from "./SearchList";

export const dynamic = "force-dynamic";

export default function SearchPage({ searchParams }: any) {
  return (
    <div className="search-page">
      <SearchList searchParams={searchParams} />
    </div>
  );
}
