import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";

export const Page = ({ children, id }) => {
  return (
    <main>
      <Navbar />
      <section id={id}>{children}</section>
      <Footer />
    </main>
  );
};
