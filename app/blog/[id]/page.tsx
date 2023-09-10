import { getAllPosts } from "@/services/getPosts";
import { Metadata } from "next";

async function getData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

//для того, чтобы сработал SSG в blog/page.tsx
export async function generateStaticParams() {
  const posts: any[] = await getAllPosts();

  // возвращаем массив ссылок
  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
