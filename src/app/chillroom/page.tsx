  "use client";
  import  Player  from "lottie-react";
  import campfireAnimation from "@/data/animations/ejemplo2.json";

  export default function ChillRoomPage() {
    return (
        <div className="w-screen h-screen md:w-full md:h-full flex items-center justify-center overflow-hidden transform origin-center 
              md:rotate-0 rotate-90">
        <Player
          autoplay
          loop
          animationData={campfireAnimation}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    );
  }
