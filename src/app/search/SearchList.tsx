"use client";

import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const SearchList = ({ searchParams }: any) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchParams.q === "type" && posts?.length === 0) {
        const fetchedPosts: any = await getPostsData();
        setPosts(fetchedPosts);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (searchParams.q !== "type") {
    redirect(`/search?q=type&type=${searchParams?.type}`);
  }

  return posts.map((post: any) => <h1 key={post.id}>{post.title}</h1>);
};

export default SearchList;
