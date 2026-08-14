import { Post } from "@/interfaces/post";
import fs from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const content = fs.readFileSync(fullPath, "utf8");

  return { slug: realSlug, content } as Post;
}
