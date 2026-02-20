import Title from "./components/title";
import Text from "./components/text";
import styles from './page.module.css'

export default function Home() {

  return (
    <>
    <Title title="Quem somos nós." />
    <div className={styles.about}>
      <div className={styles.secao__imagem}>
        <img src="/images/vialuz_imagem.png" alt="Imagem de um viajante no espaço"/>
      </div>
      <div className={styles.about__content}>
        <Text className={styles.aboutText}>
          Somos uma empresa de turismo inovadora que leva você a explorar destinos incríveis em todo o universo, na velocidade da luz.
          <br /><br />
          Combinamos tecnologia futurista e experiências imersivas para transformar cada viagem em uma jornada única.
          <br /><br />
          Na ViaLuz, acreditamos que viajar é mais do que chegar a um destino — é viver o extraordinário.
          <br /><br />
          Junte-se a nós e ultrapasse fronteiras.
          <br />
          O próximo destino está mais perto do que você imagina. 🚀
        </Text>
      </div>
    </div>
    </>
  );
}
