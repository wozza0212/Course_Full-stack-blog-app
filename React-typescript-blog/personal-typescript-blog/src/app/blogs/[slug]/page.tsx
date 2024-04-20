import { NextPage, NextPageContext } from 'next/types';
import { PageLayout } from '../../components';
import { getAllBlogSlugs, getBlogBySlug } from '../../../../lib/blogs';
import { Blog } from '../../../../interfaces/Blog';

export const generateStaticParams = async () => {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    params: { slug },
  }));
};

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

const BlogDetail: NextPage<BlogDetailProps> = ({ params }) => {
  const { slug } = params;
  const blog: Blog = getBlogBySlug(slug);
  return (
    <>
      <PageLayout>
        <div className="w-2/3 m-auto">
          {/* Blog Header Starts */}
          <div className="blog-detail-header">
            <div className="flex flex-row justify-between mb-2">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <span className="sr-only">{blog.author}</span>
                    <div className="relative h-10 w-10 !mb-0">
                      {/* <Image 
                        priority
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        src={authorImage} alt="" 
                      /> */}
                    </div>
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 !mb-0">
                    <a href="#" className="hover:underline">
                      {blog.author}
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime="{date}">{blog.date}</time>
                  </div>
                </div>
              </div>
              <div className="flex self-end">
                {/* Social Links Here */}
              </div>
            </div>
            <h1 className="font-bold text-4xl mb-1">{blog.title}</h1>
            <h2 className="blog-detail-header-subtitle mb-2 text-xl text-gray-600">{blog.description}</h2>
            <div className="h-96 bg-black mx-auto w-full relative">
              {/* <Image
                priority
                layout="fill"
                objectFit="cover"
                src={coverImage} alt=""/> */}
            </div>
          </div>
          {/* Blog Header Ends */}
          <article className="prose lg:prose-lg markdown-image-50">
            {/* Blog Content Here */}
            {blog.content}
          </article>
        </div>
      </PageLayout>
    </>
  );
};

export default BlogDetail;