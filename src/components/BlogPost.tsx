
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { blogPosts, getBlogPostBySlug } from '@/data/blogPosts';
import { CalendarIcon, Clock, ArrowLeft } from 'lucide-react';

interface BlogPostProps {
  slug: string;
}

const BlogPost = ({ slug }: BlogPostProps) => {
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    );
  }
  
  return (
    <article className="py-12">
      <div className="container-custom max-w-4xl">
        <Button variant="ghost" size="sm" asChild className="mb-8">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
        
        <h1 className="text-3xl md:text-4xl font-bold text-resume-primary mb-4">{post.title}</h1>
        
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <div className="flex items-center gap-1">
            <CalendarIcon size={18} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={18} />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none mb-12">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogPosts
              .filter(relatedPost => relatedPost.slug !== slug)
              .slice(0, 2)
              .map(relatedPost => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`} 
                  className="p-4 border rounded-md hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium text-resume-primary">{relatedPost.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{relatedPost.excerpt}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
