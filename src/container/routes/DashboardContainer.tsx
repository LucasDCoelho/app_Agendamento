import { DashboardChildren } from "../../components/Dashboard/Children";
import { DashboardAside } from "../../components/Dashboard/Aside";
import { Dashboard } from "../../components/Dashboard";

export function DashboardContainer(){
  return(
    <div className="flex">
      <DashboardAside/>
      <DashboardChildren>
        <Dashboard />
      </DashboardChildren>
    </div>
  );
}