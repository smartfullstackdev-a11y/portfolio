import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import { useVH } from "../hooks";
import "../styles/globals.css";
import "../styles/themes.css";

function MyApp({ Component, pageProps }) {

  useVH();

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <Layout>
      <Head title={`Kevin Hernandez | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
