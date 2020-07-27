import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <script
        src="https://kit.fontawesome.com/c772bfb479.js"
        crossOrigin="anonymous"
      ></script>
    </Head>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
