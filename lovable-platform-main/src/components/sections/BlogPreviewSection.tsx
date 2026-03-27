import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { posts } from "@/data/mockCms";

const BlogPreviewSection = () => {
  const published = posts.filter((p) => p.status === "published").slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">From the Blog</h2>
            <p className="text-muted-foreground">Insights on technology, design, and growth.</p>
          </div>
          <Link
            to="/blog"
            className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View all posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {published.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-xs uppercase tracking-widest">
                  {post.categories[0]}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground mb-2">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          to="/blog"
          className="md:hidden mt-8 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          View all posts <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
