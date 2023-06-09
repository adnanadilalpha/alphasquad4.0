import "@/styles/globals.css";
import "../styles/main.css";
import "../pages/components/alphaway/alphaway.css";
import "../pages/components/people/people.css";
import "../pages/components/dope/dope.css";
import "../pages/components/book/book.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
