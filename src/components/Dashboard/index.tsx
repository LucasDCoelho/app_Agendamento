import { PlusIcon } from "@heroicons/react/24/outline";


export function Dashboard(){
  return(
    <>
      <div className="p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-slate-800 text-4xl">Hello Niely,</h2>
          
          <button className="flex bg-slate-800 px-4 py-2 rounded gap-1">
            <PlusIcon className="w-6 h-6 text-slate-50"/> 
            <h2 className="text-slate-50">Adicionar Horário</h2>
          </button>
        </div>
        

        <div className="mt-4 border h-[calc(100vh-7.5rem)]">
          
        </div>
      </div>
    </>
  );
}