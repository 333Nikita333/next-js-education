import { redirect } from "next/navigation";

export default function NewPostForm({
  onSuccess,
}: {
  onSuccess: (id?: number) => Promise<void>;
}) {
  async function createPost(data: FormData) {
    //! пишем директиву, чтобы использовать серверный экшен
    //! серверные экшены призваны к тому, чтобы мы не создавали свои 
    //! отдельные дополнительные ендпоинты и уже внутри этих эндпоинтов 
    //! делать запрос за дынными (получение, мутация данных)
    "use server";
    //! получаем данные с формы
    const { title, body } = Object.fromEntries(data);
    //! делаем POST запрос на сервер с новыми данными
    const response = await fetch("http://localhost:3300/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body, userId: 1 }),
    });

    //! получаем ответ от сервера
    const post = await response.json();
    
    await onSuccess(post.id);
  }

  return (
    <form className="form" action={createPost}>
      <input type="text" placeholder="title" required name="title" />
      <textarea placeholder="content" required name="body" />
      <div>
        <input type="submit" value="Add post" />
      </div>
    </form>
  );
}
