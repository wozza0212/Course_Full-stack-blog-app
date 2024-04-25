import { Metadata, NextPage } from 'next/types';
import { BlogHeader, PageLayout } from '../../components';
import { getAllBlogSlugs, getBlogBySlugWithMarkdown } from '../../../../lib/blogs';
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
          <BlogHeader blog={blog} />
          <article className="prose lg:prose-lg markdown-image-50">
            <div dangerouslySetInnerHTML={{ __html: blog.content}} />
          </article>
        </div>
      </PageLayout>
    </>
  );
};

export default BlogDetail;