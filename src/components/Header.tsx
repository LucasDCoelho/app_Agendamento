import { Avatar } from "../ui/Avatar";

export function Header(){
  return(
    <>
      <header  className="bg-slate-700 h-16 flex items-center justify-between px-10">
        <h1 className="text-slate-100">Niely Moreira</h1>

          <Avatar/>
      </header>
    </>
  );
}