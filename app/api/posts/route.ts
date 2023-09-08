import { NextResponse } from "next/server";
import { posts } from "./posts";

//получение квери параметров
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  // пример логики работы с квери параметрами
  let currentPosts = posts;
  if (query) {
    currentPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  return NextResponse.json(currentPosts);
}

// получение тела запроса
export async function POST(req: Request) {
  const body = await req.json();

  console.log(body);

  return NextResponse.json({ body });
}
