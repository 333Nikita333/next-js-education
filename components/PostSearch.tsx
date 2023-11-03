"use client";
import useSWR from "swr";
import { FormEventHandler, useState } from "react";
import { getPostsBySearch } from "@/services/getPosts";

type Props = {
  onSearch: (value: any[]) => void;
};

const PostSearch = () => {
  const { mutate } = useSWR("posts");
  const [search, setSearch] = useState<string>("");
// const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
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
