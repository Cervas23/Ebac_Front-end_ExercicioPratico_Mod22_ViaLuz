import BlogList from "@/app/components/blogList";
import Title from "@/app/components/title";
import getNews from "@/libs/api/news";

export const revalidate = 3600;

const PageBlog = async () => {
  const artigos = await getNews();
  return (
  <>
    <div>
        <Title title="O blog que todo vialujante precisa ver."></Title>
    </div>
    <BlogList artigos={artigos} />
  </>
  )
}

export default PageBlog;