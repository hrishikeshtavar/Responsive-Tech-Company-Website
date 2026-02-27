import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';
import { SEO } from './SEO';

export function BlogArticle() {
  const { content } = useSiteContent();
  const slug = decodeURIComponent(window.location.pathname.replace('/blog/', ''));
  const post = content.blog.posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="mx-auto max-w-4xl px-4 pt-32 pb-20 text-slate-200">
        <SEO
          title="Article Not Found - Zenture IT Solutions"
          description="The requested blog article was not found."
          ogUrl={`https://zenture.in/blog/${slug}`}
          noIndex={true}
        />
        <h1 className="mb-4 text-4xl text-white">Article Not Found</h1>
        <p className="mb-8 text-slate-400">
          This article does not exist yet. Please check the latest insights section.
        </p>
        <a href="/#blog" className="text-cyan-400 hover:text-cyan-300">
          Back to Insights
        </a>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 pt-32 pb-20 text-slate-200">
      <SEO
        title={post.metaTitle || `${post.title} | Zenture IT Solutions`}
        description={post.metaDescription || post.excerpt}
        ogUrl={`https://zenture.in/blog/${post.slug}`}
        pageType="article"
      />

      <p className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs text-cyan-300">
        {post.category}
      </p>
      <h1 className="mb-6 text-4xl text-white sm:text-5xl">{post.title}</h1>

      <div className="mb-8 flex flex-wrap items-center gap-5 text-sm text-slate-400">
        <p className="inline-flex items-center gap-2">
          <User className="h-4 w-4" />
          {post.author}
        </p>
        <p className="inline-flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
        <p className="inline-flex items-center gap-2">
          <Clock className="h-4 w-4" />
          {post.readTime}
        </p>
      </div>

      <article className="prose prose-invert max-w-none rounded-2xl border border-slate-700 bg-slate-800/40 p-6 leading-8 text-slate-200">
        <p>{post.content || post.excerpt}</p>
      </article>

      <a href="/#blog" className="mt-8 inline-block text-cyan-400 hover:text-cyan-300">
        Back to Insights
      </a>
    </main>
  );
}
