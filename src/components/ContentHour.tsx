type Props = {
  children: React.ReactNode
}


export function ContentHour({
  children
}: Props) {
  return (
    <>
      <main className="w-full h-[calc(100vh-4rem)]">
        <h2 className="text-3xl text-center my-8 font-bold">Horários Disponiveis</h2>
        <div className="flex px-10 h-full w-full flex-wrap">
          {children}
        </div>
      </main>
    </>
  );
}