import { Metadata } from "next";

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      // Чтобы повторно проверять данные через определенный интервал времени,
      // можно использовать опцию в fetch next.revalidate, чтобы установить время
      // жизни кэша ресурса (в секундах).
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

type Props = {
  params: {
    //получение динам. параметров -
    //название id потому что папка со страницей имеет название [id]
    id: string;
  };
};

//создание динемаических метаданных
export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);

  return {
    title: post.title,
  };
}

const Post = async ({ params: { id } }: Props) => {
  const post = await getData(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default Post;
