import { getNews } from "@/libs/api/news";
import { slugify } from "@/libs/slug";
import styles from "./newsPage.module.css"
import Link from "next/link";


type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export const generateMetadata = async ({params} : Props) => {
    const artigos = await getNews();
    const { slug } = await params;
    const artigo = artigos.find(
        (a) => slugify(a.title) === slug
    );

    if (!artigo) {
        return;
    }
    
    return{
        title : `${artigo.title} | ViaLuz`,
        description : artigo.description,
        openGraph : {
            title : `${artigo.title} | ViaLuz`,
            description : artigo.description,
            images : [`${artigo.urlToImage}`]
        }
    }

}


export default async function BlogDetalhe({ params }: Props) {
    const artigos = await getNews();
    const { slug } = await params;

    const artigo = artigos.find(
        (a) => slugify(a.title) === slug
    );

    if (!artigo) {
        return <div>Artigo não encontrado</div>;
    }

    return (
        <>
            <div className={styles.news}>
                <div className={styles.news__container}>
                    <Link href={"/pagina/blog"} className={styles.news__back}>Voltar</Link>
                    <section>
                        <figure>
                            <img className={styles.news__imagem} src={artigo.urlToImage} alt={`Foto da notícia ${artigo.title}`} />
                        </figure>
                        <article className={styles.news__info}>
                            <h2>{artigo.title}</h2>
                            <p>{artigo.description}</p>
                            <div className={styles.info__data}>
                                <p>{artigo.author}</p>
                                <p>{artigo.publishedAt}</p>
                            </div>
                        </article>
                        <a href={artigo.url} target="_blank" className={styles.news__more}>
                            Ver matéria original →
                        </a>
                    </section>
                </div>
            </div>
        </>
    );
}