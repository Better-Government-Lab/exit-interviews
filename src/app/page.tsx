import { LandingPage } from "@/app/_components/landing-page";
import { getPostBySlug } from "@/lib/posts";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Index() {
  const pageContent = getPostBySlug(`one-year-since`);
  const formattedContent = await markdownToHtml(pageContent.content || "");

  return (
    <main>
      <p>Exit interviews</p>
      <LandingPage formattedContent={formattedContent} />
    </main>
  );
}
