type Props = {
  children: React.ReactNode
}


export function ContentHour({
  children
}: Props) {
  return (
    <>
      <main className="w-screen h-[calc(100vh-4rem)]">
        <div className="flex pl-10 items-center h-full w-full flex-wrap">
          {children}
        </div>
      </main>
    </>
  );
}