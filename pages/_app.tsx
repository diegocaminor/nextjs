import { AppProps } from "next/app";
import Layout from "../Components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  // providers - context/providers, theme, data
  // layout
  // props adicionales
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
