type DashboardChildrenProps={
  children: React.ReactNode
}


export function DashboardChildren({ 
  children
}: DashboardChildrenProps){
  return(
    <>
      <main className="w-screen h-screen">
        {children}
      </main>
    </>
  );
}