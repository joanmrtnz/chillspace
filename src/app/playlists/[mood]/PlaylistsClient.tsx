"use client";
import { useState } from "react";
import PlaylistCarousel from "@/components/PlaylistCarousel";
import BackButton from "@/components/BackButton";
import type { Mood } from "@/lib/spotify/moods";
import ResultDialog from "@/components/ResultDialog";
import {useTranslations} from 'next-intl';

export default function PlaylistsClient({ mood } : { mood : Mood }) {
  const tUi = useTranslations('ui');
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [followResult, setFollowResult] = useState<"success"|"error"|null>(null);


  return (
    <div className="bg-black/1 mt-[60px] md:mt-[50px] min-h-screen flex items-center justify-center px-4 sm:px-12 md:px-24 lg:px-32 xl:px-[150px]">
      <BackButton href="/playlists" positionClass="absolute top-8 left-4" />
      <div className="relative w-full max-w-4xl px-6">
        <PlaylistCarousel
          playlists={mood.playlists}
          onRequireLogin={() => setShowLoginDialog(true)}
          onFollowResult={setFollowResult}
        />
      </div>
           {showLoginDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-black m-2 md:m-0">
            <p>{tUi('noLoggedMessage')}</p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowLoginDialog(false)}
                className="px-3 py-2 border rounded"
              >
                {tUi('cancel')}
              </button>
              <button
                onClick={() => (window.location.href = "/spotify-login")}
                className="px-3 py-2 bg-green-500 text-white rounded"
              >
                {tUi('login')}
              </button>
            </div>
          </div>
        </div>
      )}
      <ResultDialog type={followResult} onClose={() => setFollowResult(null)} />
    </div>
  );
}
