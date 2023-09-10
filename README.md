# Rendering options

## 1. CSR (Client-Side Rendering)

- Typical for Single Page Applications (SPAs).
- All rendering occurs on the client side.
- A client makes a request for data.
- The server provides one or more empty placeholders that are filled dynamically.
- Not indexed by search engines.

## 2. SSR (Server-Side Rendering)

- The server renders an HTML page on the initial user request.
- JavaScript is "hydrated" into HTML on the client side.
- Transitions between pages are similar to CSR.
- Indexed by search engines.
- Utilizes the Next.js approach with the `pages` directory.

## 3. RSC (React Server Components)

- A method to render content on the server and stream it to the client without subsequent hydration.
- Streams HTML statically not only on the initial request but also during further navigation.
- Indexed by search engines.
- Utilizes the Next.js 13 approach with the `app` directory.

## 4. SSG (Static Site Generation)

- HTML pages are generated on the server.
- Rendering occurs during the build process (not at runtime).
- Each static page does not require subsequent hydration.
- Requires specific configuration in Next.js, such as `getStaticParams` in the app router API and `getStaticPath` in the page router API.

## 5. ISR (Incremental Static Regeneration)

- Allows you to re-render static pages.
- Combines elements of SSG and SSR/RSC.
- Updates can be triggered by a timer or specific events.

The choice of rendering method depends on the specific requirements of your project, and Next.js provides flexible tools to implement each of these options.
