import Title from '@/app/components/title';
import { destinos } from '@/libs/destinos.js';
import dynamic from 'next/dynamic';

const Grid = dynamic(() => import('@/app/components/grid'), {
  loading: () => <p>Carregando destinos...</p>,
});

const PageDestinos = () => {
  return (
    <section>
      <Title title="Destinos mais procurados."></Title>
      <Grid destinos={destinos} />
    </section>
  );
};

export default PageDestinos;
