import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Head from "next/head";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { loginState } from "../../atom/loginState";
import { Comments } from "../../components/CommentBox";
import { CommentBox } from "../../components/CommentBox";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="/">
        <a className="btn btn-back">Go Back</a>
      </Link>
      <div className="card card-page">
        <h1 className="post-title text-4xl font-bold mb-4 mt-4 text-center">
          {title}
        </h1>
        <center>
          <img
            className="content-between"
            src={cover_image}
            alt=""
            style={{ margin: "auto 0" }}
          />
          <div className="post-date text-center mt-2">Posted on {date}</div>
        </center>

        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-3 mt-10">Comments</h2>
      <div>
        <Comments />
      </div>
      {isLoggedIn === true ? (
        <>
          <h2 className="text-2xl font-bold mb-3 mt-10">Add Comment</h2>
          <div>
            <CommentBox />
          </div>
        </>
      ) : (
        <h2 className="text-2xl font-bold mb-3 mt-10">
          You need to login to comment
        </h2>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
