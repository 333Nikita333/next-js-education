/* eslint-disable @next/next/no-page-custom-font */
import { FC } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import nextJsImage from "../public/nextJsImage.png";
import "../styles/globals.scss";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>

      {/* placeholder="blur" serves to make the image blurry until it is fully loaded */}
      <Image
        src={nextJsImage}
        width={600}
        height={350}
        placeholder="blur"
        alt="nextJsImage"
      />
    </Layout>
  );
};

export default MyApp;
