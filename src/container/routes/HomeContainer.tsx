import { CardHorario } from "../../components/CardHorario";
import { ContentHour } from "../../components/ContentHour";
import { Header } from "../../components/Header";


export function HomeContainer() {
  return (
    <>
      <Header/>
      <ContentHour>
        <CardHorario/>
        <CardHorario/>
        <CardHorario/>
        <CardHorario/>
        <CardHorario/>
        <CardHorario/>
        <CardHorario/>
        <CardHorario/>
      </ContentHour>
    </>
  )
}