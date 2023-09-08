// import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

// получение URL-параметров
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params?.id;

  // для того, чтобы можно было получить тип заголовки
  // (например тип контента Content-Type)
  const headerList = headers();
  const type = headerList.get("Content-Type");

  // для работы с куками. В данном случае получаем значение по имени кука
  const cookieList = cookies();
  const cookie2 = cookieList.get("Cookie_2")?.value;

  // для того, если нужно перенаправить пользователя на определенную страницу
  //   redirect("/blog");

  return NextResponse.json({ id, type, cookie2 });
}
