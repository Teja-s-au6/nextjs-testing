"use client";

import React, { useEffect } from "react";
import { redirect } from "next/navigation";

const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const Posts = async ({ searchParams }: any) => {
  const posts: any = await getPostsData();

  useEffect(() => {
    if (searchParams.q === "type") {
      const a = "sdsd";
    } else if (searchParams?.q) {
      redirect(`/posts?q=type`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return posts.map((post: any) => <h1 key={post.id}>{post.title}</h1>);
};

export default Posts;
