import Link from "next/link";

export function PostComment({ post }) {
  return (
    <div className="feature-card">
      <img src={post.frontmatter.cover_image} alt="" />

      <div className="post-date text-center">
        Posted on {post.frontmatter.date}
      </div>

      <h3 className="text-l font-bold mb-3 text-center">
        {post.frontmatter.title}
      </h3>
      <div className="pt-4 text-center">
        <Link href={`/blog/${post.slug}`}>
          <a className="btn">Read More</a>
        </Link>
      </div>
    </div>
  );
}

export function PostCard({ post }) {
  return (
    <div className="feature-card">
      <img src={post.frontmatter.cover_image} alt="" />

      <div className="post-date text-center">
        Posted on {post.frontmatter.date}
      </div>

      <h3 className="text-l font-bold mb-3 text-center">
        {post.frontmatter.title}
      </h3>
      <div className="pt-4 text-center">
        <Link href={`/blog/${post.slug}`}>
          <a className="btn">Read More</a>
        </Link>
      </div>
    </div>
  );
}

export function Post({ post }) {
  return (
    <div className="card">
      <img src={post.frontmatter.cover_image} alt="" />

      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <h3 className="text-l font-bold mb-3">{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <a className="btn">Continue Reading</a>
      </Link>
    </div>
  );
}
