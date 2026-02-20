import Link from "next/link";
import { slugify } from "@/libs/slug";
import styles from "./cardblog.module.css";
import { Artigo } from "@/types/types";

type Props = {
  artigo : Artigo;
};

const CardBlog = ({ artigo }: Props) => {
  const slug = slugify(artigo.title);

  return (
    <Link href={artigo.url} target="_blank" rel="noopener noreferrer">
      <article className={styles.blogCard}>
        {artigo.urlToImage && (
          <img src={artigo.urlToImage} alt={artigo.title} />
        )}

        <div className={styles.blogContent}>
          <h2>{artigo.title}</h2>

          <p>{artigo.description}</p>
          
          <p>{artigo.author}</p>
          <span>
            {new Date(artigo.publishedAt).toLocaleDateString("pt-BR")}
          </span>
        </div>
      </article>
    </Link>
        
  );
};

export default CardBlog;
