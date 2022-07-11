import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import configJson from "../config.json";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Home" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="icon"
        href={`${configJson.basePath}/assets/favicon.ico`}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=optional"
        rel="stylesheet"
      />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>Made by Ordina</span>
    </footer>
  </div>
);

export default Layout;
