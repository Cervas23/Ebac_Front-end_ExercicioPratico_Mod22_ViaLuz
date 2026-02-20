import {destinos} from "@/libs/destinos";
import { slugify } from "@/libs/slug";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./destinoPage.module.css"

type Props = {
  params : Promise<{
    local : string;
  }>
}

const DetalheDestino = async ({ params } : Props) => {
  const { local } = await params;

  const destino = destinos.find(
    (d) => slugify(d.local) === local
  );

  if (!destino) {
    return notFound();
  }

  const {descricao, imagem} = destino

  return (
  <>
    <div className={styles.destino}>
      <div className={styles.destino__container}>
        <Link href={"/pagina/destinos"} className={styles.destino__back}>Voltar</Link>
        <section>
          <figure>
            <img className={styles.destino__imagem} src={imagem} alt={`Foto do destino ${destino.local}`} />
          </figure>
          <article className={styles.destino__info}>
            <h2>{destino.local}</h2>
            <p>{descricao}</p>
          </article>
        </section>
      </div>
    </div>
  </>
  )
}

export default DetalheDestino;