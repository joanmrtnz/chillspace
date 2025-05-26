"use client";
import { HiOutlineTrophy } from "react-icons/hi2";
import { TbMoodSad } from "react-icons/tb";
import {useTranslations} from 'next-intl';


export default function ResultDialog({
    type,
    onClose,
}: {
    type: "success" | "error" | null;
    onClose: () => void;
}) {

    if (!type) return null;
    const isSuccess = type === "success";
    const tUi = useTranslations('ui');

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div
                className="w-[90%] max-w-lg md:max-w-xl bg-white/95 rounded-xl px-10 py-8 md:px-16 md:py-12 text-center space-y-8 shadow-xl"
            >
                <div className="text-lg md:text-xl font-semibold text-[var(--color-text-primary)]">
                    <div className="flex items-center justify-center gap-3">
                        {isSuccess ? (
                            <HiOutlineTrophy className="text-2xl" />
                        ) : (
                            <TbMoodSad className="text-2xl" />
                        )}  
                        {isSuccess ? `${tUi('playlist-followed')}` : `${tUi('playlist-not-followed')}`}
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="text-[var(--color-text-primary)] hover:text-[var(--color-slate-700)]/80 bg-opacity-40 
            bg-[var(--color-gray-100)]/30 hover:bg-[var(--color-slate-200)]/20  border hover:border-[var(--color-text-primary_20)] 
            border-[var(--color-text-primary)] focus:ring-[var(--color-green-500)] focus:outline-none  rounded-lg text-md px-5 py-3.5 w-full"
                >
                    {tUi('close')}
                </button>
            </div>
        </div>
    );
}
