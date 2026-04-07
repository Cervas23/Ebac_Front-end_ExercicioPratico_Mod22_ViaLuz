import React from 'react';
import { Destino } from '@/types/types';
import styles from './card.module.css';
import Link from 'next/link';
import { slugify } from '@/libs/slug';
import { truncateSmart } from '@/libs/truncate';
import Image from 'next/image';

type Props = {
  destino: Destino;
};

const Card = ({ destino }: Props) => {
  const { id, local, descricao, imagem } = destino;
  const slug = slugify(local);

  const resumeDescriptiom = truncateSmart(descricao ?? '', 70);

  return (
    <div className={styles.card} key={id}>
      <Link href={`/pagina/${slug}`}>
        <div className={styles.imageContainer}>
          <Image
            src={imagem}
            alt={`País de destino ${local}`}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              25vw"
            priority
            className={styles.card__poster}
          />
        </div>
        <div className={styles.card__info}>
          <h3 className={styles.card__title}>{local}</h3>
          <p className={styles.card__description}>{resumeDescriptiom}</p>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(Card);
