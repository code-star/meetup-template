import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
// import fav from "../public/assets/favicon.png";

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
      {/* <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
      /> */}
      <link
        rel="icon"
        href="meetup-template/assets/favicon.png"
        // href="public/assets/favicon.png"
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
