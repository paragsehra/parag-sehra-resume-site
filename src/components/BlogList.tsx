
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import { blogPosts } from '@/data/blogPosts';
import { CalendarIcon, BookOpen } from 'lucide-react';

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage, 
    currentPage * postsPerPage
  );

  return (
    <section className="section-padding">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-resume-primary mb-8">Blog</h1>
        
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPosts.map(post => (
            <Card key={post.id} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link to={`/blog/${post.slug}`} className="text-resume-primary hover:text-resume-accent transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <CalendarIcon size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen size={16} />
                  <span>{post.readingTime} min read</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink 
                    onClick={() => setCurrentPage(index + 1)}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </section>
  );
};

export default BlogList;
