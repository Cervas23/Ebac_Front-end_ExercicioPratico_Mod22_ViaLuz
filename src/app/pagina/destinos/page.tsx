import Title from "@/app/components/title";
import {destinos} from "@/libs/destinos.js"
import Grid from '@/app/components/grid'

const PageDestinos = () => {
  return (
    <div>
        <Title title="Destinos mais procurados."></Title>
        <Grid destinos={destinos}/>
    </div>
  )
}

export default PageDestinos;