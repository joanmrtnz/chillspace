"use client";


export default function ChillRoomPage() {

  return (
    <div className="md:min-h-screen min-h-[80vh] flex flex-col  justify-center  px-6  m-auto bg-[var(--navy)] p-4">
      <div className="flex items-center justify-center font-roboto">
        <div className="relative w-[200px] h-[200px] border border-[var(--navy-shadow)]  flex items-center justify-center">
          <div
            className="absolute -top-[5px] -left-[5px] w-[10px] h-[10px] rounded-full bg-[var(--green)] shadow-[0_0_10px_7px_rgba(60,179,113,0.8)] animate-breathe"/>
          <div
            className="flex items-center justify-center  text-white bg-[var(--green)]/80 
                   text-[1.5em] w-[125px] h-[125px] animate-expand overflow-hidden">
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

