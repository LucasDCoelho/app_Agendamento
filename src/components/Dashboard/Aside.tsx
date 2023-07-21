import { Avatar } from "../../ui/Avatar";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";

export function DashboardAside() {
  return (
    <>
      <aside className="h-screen w-3/12 bg-slate-600">
        <div className="flex items-center justify-center mt-4 gap-8">
          <Avatar />
          <h1 className="text-slate-50 font-bold text-xl">Niely Moreira</h1>
        </div>

        <nav className="flex justify-center mt-10">
          <ul className="flex flex-col gap-3">
            <button className="bg-slate-50 px-10 py-2 rounded">
              <li className="flex items-center gap-5 ">
                <ComputerDesktopIcon className="w-6 h-6 text-slate-800" /> <h2 className="text-lg text-slate-800">Dashboard</h2>
              </li>
            </button>

            <button className="px-10 py-2 rounded">
              <li className="flex items-center gap-5 ">
                <ComputerDesktopIcon className="w-6 h-6 text-slate-800" /> <h2 className="text-lg text-slate-800">Dashboard</h2>
              </li>
            </button>

          </ul>
        </nav>


      </aside>
    </>
  );
}