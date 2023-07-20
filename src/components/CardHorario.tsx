import { useEffect, useState } from "react"
import { set, ref, push } from "firebase/database";
import { db } from "../../firebase.config"

import { CheckboxHour } from "./CheckboxHour";

type CardHorarioProps = {
  titleHorario: string,
}

export function CardHorario({
  titleHorario
}: CardHorarioProps) {
  const [ selectedHour, setSelectedHour ] = useState<string[]>([]);


  const handleHorarioSelecionado = (horario: string) =>{
    setSelectedHour((prevSelecionados)=> 
      prevSelecionados.includes(horario)
        ? prevSelecionados.filter((h)=> h !== horario)
        : [...prevSelecionados, horario]
    )
  }

  const handleSubmit = () => {

    const horariosRef = ref(db, "horarios");
    const newHorariosRef = push(horariosRef);

    set( newHorariosRef ,{
      title: titleHorario,
      selectedHour,
    }).then(()=>{
      console.log("O horario selecionado foi adicionado com sucesso!")
    }).catch((error)=>{
      console.error("Opss, erro ao adicionar o horario selecionado", error)
    })

    setSelectedHour([]);
  }

  console.log()

  return (
    <section className="flex flex-col mx-3 items-center justify-center rounded-lg w-52 h-64 border-slate-800 border-2"> 
      <h1 className="font-semibold text-xl mb-2">{titleHorario}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col" >
        <CheckboxHour 
          titleLabel="14:00"
          checked={selectedHour.includes("14:00")}
          changed={() => handleHorarioSelecionado("14:00")}
          />
        <CheckboxHour 
          titleLabel="16:00"
          checked={selectedHour.includes("16:00")}
          changed={() => handleHorarioSelecionado("16:00")}
        />
        <button 
          className="w-full bg-slate-800 text-slate-50 rounded-md p-2 mt-6 hover:bg-slate-700"
          type="submit"
          >Resevar</button>
      </form>
    </section>
  );
}
