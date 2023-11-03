// import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const headerList = headers();
  const type = headerList.get("Content-Type");

  const cookieList = cookies();
  const cookie2 = cookieList.get("Cookie_2")?.value;

   // logic delete post
  // redirect('/blog')

  return NextResponse.json({ id, type, cookie2 });
}
