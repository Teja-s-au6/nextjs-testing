"use client";

import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const Posts = ({ searchParams }: any) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchParams.q === "type" && posts?.length === 0) {
        const fetchedPosts: any = await getPostsData();
        setPosts(fetchedPosts);
      }
    };

    fetchData();
  }, [searchParams.q, posts]);

  if (searchParams.q !== "type") {
    console.log("Data 2");
    redirect("/posts?q=type");
  }

  return posts.map((post: any) => <h1 key={post.id}>{post.title}</h1>);
};

export default Posts;
