import { Destino } from "@/types/types";
import styles from './card.module.css'
import { symlink } from "fs";

type Props = {
    destino : Destino
}

const Card = ({destino} : Props) => {
    const {id, local, descricao, imagem} = destino;

    return (
        <div className={styles.card} key={id}>
            <img src={imagem} alt={`País de destino ${local}`} width={300} height={200} className={styles.card__poster} />
            <div className={styles.card__info}>
                <h3 className={styles.card__title}>{local}</h3>
                <p className={styles.card__description}>{descricao}</p>
            </div>
        </div>
    )
}

export default Card;