export default function ChillRoomPage() {

  return (
    <div className="md:min-h-screen min-h-[80vh] flex flex-col  justify-center  px-6  m-auto p-4">
      <div className="flex items-center justify-center font-roboto">
        <div className="relative w-[200px] h-[200px] border border-[var(--shadow-gray)]  flex items-center justify-center">
          <div
            className="absolute -top-[5px] -left-[5px] w-[10px] h-[10px] rounded-full bg-[var(--color-text-primary_50)] shadow-[0_0_10px_7px_rgba(33,53,71,0.3)] animate-breathe"/>
          <div
            className="flex items-center justify-center  text-white bg-[var(--color-text-primary_50)]
                   text-[1.25em] w-[125px] h-[125px] animate-expand overflow-hidden">
            <span className="absolute text-transparent animate-words1">Inspira</span>
            <span className="absolute text-transparent animate-words2">Aguanta</span>
            <span className="absolute text-transparent animate-words3">Expira</span>
            <span className="absolute text-transparent animate-words4">Aguanta</span>
          </div>
        </div>
      </div>
    </div>
  );
}

