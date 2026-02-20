import { Destino } from "@/types/types";
import styles from './card.module.css'
import Link from "next/link";
import { slugify } from "@/libs/slug";

type Props = {
    destino : Destino
}

const Card = ({destino} : Props) => {
    const {id, local, descricao, imagem} = destino;
    const slug = slugify(local);

    return (
        <div className={styles.card} key={id}>
            <Link href={`/pagina/${slug}`}>
                <img src={imagem} alt={`País de destino ${local}`} width={300} height={200} className={styles.card__poster} />
                <div className={styles.card__info}>
                    <h3 className={styles.card__title}>{local}</h3>
                    <p className={styles.card__description}>{descricao}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card;