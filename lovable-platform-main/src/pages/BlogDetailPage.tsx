import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { posts } from "@/data/mockCms";
import { ArrowLeft } from "lucide-react";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline text-sm">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
            {post.categories.map((c) => (
              <span key={c} className="bg-muted px-2 py-1 rounded text-xs">{c}</span>
            ))}
          </div>

          <h1 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-12 pb-8 border-b border-border">
            <span className="font-medium text-foreground">{post.author.name}</span>
            <span>·</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric", month: "long", day: "numeric",
              })}
            </span>
          </div>

          <div className="prose max-w-none">
            {post.blocks.map((block) => {
              if (block.type === "heading") {
                return <h2 key={block.id} className="font-serif text-2xl text-foreground mt-10 mb-4">{block.data.text}</h2>;
              }
              if (block.type === "paragraph") {
                return <p key={block.id} className="text-foreground/80 leading-relaxed mb-6">{block.data.text}</p>;
              }
              return null;
            })}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogDetailPage;
