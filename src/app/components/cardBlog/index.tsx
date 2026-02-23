import Link from "next/link";
import { slugify } from "@/libs/slug";
import styles from "./cardblog.module.css";
import { Artigo } from "@/types/types";
import { truncateSmart } from "@/libs/truncate";

type Props = {
  artigo : Artigo;
};

const CardBlog = ({ artigo }: Props) => {
  const slug = slugify(artigo.title);
  
  const resumeTitle = truncateSmart(artigo.title ?? "", 45);
  const resumeDescriptiom = truncateSmart(artigo.title ?? "", 90);

  return (
    <Link href={`/pagina/blog/${slug}`}>
      <article className={styles.blogCard}>
        {artigo.urlToImage && (
          <img src={artigo.urlToImage} alt={artigo.title} />
        )}

        <div className={styles.blogContent}>
          <h2>{resumeTitle}</h2>

          <p>{resumeDescriptiom}</p>
          
          <p>{artigo.author}</p>
          <span>
            {artigo.publishedAt}
          </span>
        </div>
      </article>
    </Link>
        
  );
};

export default CardBlog;
