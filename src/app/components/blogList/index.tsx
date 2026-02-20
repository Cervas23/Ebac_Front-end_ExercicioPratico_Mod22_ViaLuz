import { Artigo } from "@/types/types";
import CardBlog from "../cardBlog";
import styles from './bloglist.module.css'

type Props = {
  artigos: Artigo[];
};

const BlogList = ({ artigos }: Props) => {
  if (!artigos || artigos.length === 0) {
    return <p>Nenhuma notícia encontrada.</p>;
  }
  return (
    <section className={styles.blogList}>
      {artigos.map((artigo, index) => (
        <CardBlog key={index} artigo={artigo} />
      ))}
    </section>
  );
};

export default BlogList;