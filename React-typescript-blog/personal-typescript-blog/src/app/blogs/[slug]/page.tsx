import { Metadata, NextPage } from 'next/types';
import { PageLayout } from '../../components';
import { getAllBlogSlugs, getBlogBySlugWithMarkdown } from '../../../../lib/blogs';
import { Blog } from '../../../../interfaces/Blog';
import Image from "next/legacy/image";


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

// export const generateMetaData = async ({ params }: BlogDetailProps): Promise<Metadata> => {
//   const { slug } = params;
//   const blog: Blog = getBlogBySlug(slug);
//   return {
//     title: blog.title,
//     description: blog.description,
//   };
// }

// export const generateMetaData = async () : Promise<Metadata> => {
//   return {
//     title: "new metadata title",
//     description: "Generated by create next app",
//   };
// }


export const metadata: Metadata = {
  title: "Blog Detail Page",
  description: "By Wozza",
};


const BlogDetail: NextPage<BlogDetailProps> = async ({ params }) => {
  const { slug } = params;
  const blog: Blog = await getBlogBySlugWithMarkdown(slug);
  return (
    <>
      <PageLayout>
        <div className="w-2/3 m-auto">
          <div className="blog-detail-header">
            <div className="flex flex-row justify-between mb-2">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <span className="sr-only">{blog.author}</span>
                    <div className="relative h-10 w-10 !mb-0">
                      <Image 
                        priority
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        src={blog.authorImage} alt="" 
                      />
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
              </div>
            </div>
            <h1 className="font-bold text-4xl mb-1">{blog.title}</h1>
            <h2 className="blog-detail-header-subtitle mb-2 text-xl text-gray-600">{blog.description}</h2>
            <div className="h-96 bg-black mx-auto w-full relative">
              <Image
                priority
                layout="fill"
                objectFit="cover"
                src={blog.coverImage} alt=""/>
            </div>
          </div>
          <article className="prose lg:prose-lg markdown-image-50">
            <div dangerouslySetInnerHTML={{ __html: blog.content}} />
          </article>
        </div>
      </PageLayout>
    </>
  );
};

export default BlogDetail;