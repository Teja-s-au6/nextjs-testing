"use client";

const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const Posts = async () => {
  const posts: any = await getPostsData();

  return posts.map((post: any) => <h1 key={post.id}>{post.title}</h1>);
};

export default Posts;
