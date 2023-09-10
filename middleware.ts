// этот файл для создания приватных роутов
export { default } from "next-auth/middleware";

// набор маршрутов для приватных роутов: могут быть как статические
// так и динамические наборы параметров
export const config = { matcher: ["/profile", "/protected/:path*"] };
