export function CardHorario() {
  return (
    <section className="flex flex-col mr-10 items-center justify-center rounded-lg w-52 h-64 border-slate-800 border-2"> 
      <h1 className="font-semibold ">Segunda</h1>
      <form className="flex flex-col">
        <div className="flex gap-2">
          <label >14:00 P.M</label>
          <input type="checkbox"></input>
        </div>
        <div className="flex gap-2">
          <label >16:00 P.M</label>
          <input type="checkbox"></input>
        </div>
        <button className="w-full bg-slate-800 text-slate-50 rounded-md p-2 mt-6 hover:bg-slate-700">Resevar</button>
      </form>
    </section>
  );
}
