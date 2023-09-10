import { users } from "@/data/users";
import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authConfig: AuthOptions = {
  providers: [
    // гугл аторизация
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // для возможности ввести данные для авторнизации
    Credentials({
      // данные для авторнизации
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        // возвращает null если данных нет
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // здесь может быть самая разная проверка введенных данных пользователем
        // сейчас стоит проверка если такой пользователь существует и его пароли совпадают,
        // то возвращаем этого пользователя, только без пароля
        const currentUser = users.find(
          (user) => user.email === credentials.email
        );

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;

          // authorize должен вернуть тип User
          return userWithoutPass as User;
        }

        return null;
      },
    }),
  ],
  // настройки самих страниц
  pages: {
    signIn: "/signin"
  }
};
