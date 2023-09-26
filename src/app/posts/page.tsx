import PostsList from "./Posts";

export default async function Posts({ searchParams }: any) {
  return (
    <div>
      Posts
      <PostsList searchParams={searchParams} />
    </div>
  );
}
