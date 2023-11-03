import NewPostForm from "@/components/NewPostForm";
import { redirect } from "next/navigation";

export default function NewPost() {
  return (
    <div>
      <h1>Create new post</h1>

      <NewPostForm
        onSuccess={async (id) => {
          //! обьявляем серверный экшен
          "use server";
          //! перенаправляем пользователя на страницу с новым постом
          redirect(`/blog/${id}`);
        }}
      />
    </div>
  );
}
