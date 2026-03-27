import Layout from "@/components/layout/Layout";
import { posts } from "@/data/mockCms";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const published = posts.filter((p) => p.status === "published");

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Blog</h1>
            <p className="text-muted-foreground text-lg">
              Thoughts on building modern digital platforms, design systems, and engineering culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {published.map((post, i) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className={`group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className={`bg-muted flex items-center justify-center ${i === 0 ? "aspect-[21/9]" : "aspect-video"}`}>
                  <span className="text-muted-foreground text-xs uppercase tracking-widest">
                    {post.categories.join(" · ")}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                    <span>{post.author.name}</span>
                    <span>·</span>
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric", month: "long", day: "numeric",
                      })}
                    </span>
                    {post.featured && (
                      <>
                        <span>·</span>
                        <span className="text-primary font-semibold">Featured</span>
                      </>
                    )}
                  </div>
                  <h2 className={`font-serif text-foreground group-hover:text-primary transition-colors mb-2 ${
                    i === 0 ? "text-2xl md:text-3xl" : "text-xl"
                  }`}>
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
