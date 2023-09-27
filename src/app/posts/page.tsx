import PostsList from "./Posts";

export const dynamic = "force-dynamic";

export default async function Posts({ searchParams }: any) {
  return (
    <div>
      Posts
      <PostsList searchParams={searchParams} />
    </div>
  );
}
