import PostsList from "./Posts";

export const dynamic = "force-dynamic";

const Posts = ({ searchParams }: any) => {
  return (
    <div>
      Posts
      <PostsList searchParams={searchParams} />
    </div>
  );
};

export default Posts;
