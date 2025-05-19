import BackButton from "@/components/BackButton";
import {getTranslations} from 'next-intl/server';


export default async function ChillRoomPage() {
    const tCr = await getTranslations('chillroom');


  return (
    <div className="md:min-h-screen min-h-screen flex flex-col  justify-center  px-6  m-auto p-4">
      <BackButton href="/" positionClass="absolute top-21 left-4" />  
      <div className="flex items-center justify-center font-roboto">
        <div className="relative w-[200px] h-[200px] border border-[var(--shadow-gray)]  flex items-center justify-center">
          <div
            className="absolute -top-[5px] -left-[5px] w-[10px] h-[10px] rounded-full bg-[var(--color-text-primary_50)] shadow-[0_0_10px_7px_rgba(33,53,71,0.3)] animate-breathe"/>
          <div
            className="flex items-center justify-center  text-white bg-[var(--color-text-primary_50)]
                   text-[1.25em] w-[125px] h-[125px] animate-expand overflow-hidden">
            <span className="absolute text-transparent animate-words1">{tCr('step1')}</span>
            <span className="absolute text-transparent animate-words2">{tCr('step2')}</span>
            <span className="absolute text-transparent animate-words3">{tCr('step3')}</span>
            <span className="absolute text-transparent animate-words4">{tCr('step4')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

