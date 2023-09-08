"use client";
import { getPostsBySearch } from "@/services/getPosts"; // 1-ый метод и 3-ый метод
// import { usePosts } from "@/store"; // 2-ый метод
import { FormEventHandler, useState } from "react";
import useSWR from "swr"; // 3-ой метод 

type Props = {
  onSearch: (value: any[]) => void;
};

const PostSearch = () => {
  const { mutate } = useSWR("posts"); // 3-ой метод 
  const [search, setSearch] = useState<string>("");
  // 2-ой метод (описано в blog/page.tsx)
  // const getPostsBySearch = usePosts((state) => state.getPostsBySearch); // 2-ый метод

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    // 1-ой метод (описано в blog/page.tsx)
    // const posts = await getPostsBySearch(search);
    // onSearch(posts);

    // 2-ой метод (описано в blog/page.tsx)
    // await getPostsBySearch(search);
    
    // 3-ой метод (описано в blog/page.tsx)
    const posts = await getPostsBySearch(search);
    mutate(posts);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default PostSearch;
