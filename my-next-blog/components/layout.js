import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div>레이아웃</div>
      <div>{children}</div>
      <Footer />
    </>
  );
}
