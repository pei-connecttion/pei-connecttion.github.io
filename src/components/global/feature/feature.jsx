import MarkdownIt from "markdown-it";
import Carousel from "@components/feature/carousel/carousel";


const md = new MarkdownIt({ html: true });

export default function GlobalFeature(block) {
  let content = "";
    content = (
      <>
      </>
    );
  return (
    <section className="feature pt-sm-10 pt-5 pb-4">
      <div className="container">{content}</div>
    </section>
  );
}
