import FeaturedPosts from "../components/FeaturedPosts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <Header />
        <main className="container pt-10 pb-10">
          <FeaturedPosts {...pageProps} />
          <Component {...pageProps} />
        </main>
        <Footer />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
