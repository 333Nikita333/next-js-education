// для осуществления строки поиска в странице blog
// нужно будет использовать клиентский компонент.
// Чтобы это реализовать существует 3 подхода:
// 1. сделать "use client" на всей странице (самый простой)
// 2. использовать state менеджер с библиотеки zustand (замена redux-у)
// 3. использовать библиотеку swr (очень похожа на react-query) -
// поддерживается Versel-ем


"use client";
import { getAllPosts } from "@/services/getPosts"; // 1-ый метод и 3-ый метод
// import { usePosts } from "@/store"; // 2-ый метод
import Link from "next/link";
import useSWR from "swr";
// import { useEffect } from "react";
// import { shallow } from "zustand/shallow"; // 2-ый метод

const Posts = () => {
  // const [posts, setPosts] = useState<any[]>([]); // 1-ый метод
  // const [loading, setLoading] = useState(true); // 1-ый метод

  // 1-ый метод
  // useEffect(() => {
  //   getAllPosts()
  //     .then(setPosts)
  //     .catch(console.log)
  //     .finally(() => setLoading(false));
  // }, []);

  // 2-ый метод
//   const [posts, loading, getAllPosts] = usePosts(
//     (state) => [state.posts, state.loading, state.getAllPosts],
//     shallow
//   );
//   useEffect(() => {
//     getAllPosts();
//   }, [getAllPosts]);

const {data: posts, isLoading} = useSWR("posts", getAllPosts); // 3-ый метод

  return (
    //   loading //1-ый метод и 2-ый метод
    isLoading // 3-ый метод
      ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  ));
};

export default Posts;
