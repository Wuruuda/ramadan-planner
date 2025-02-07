
import { Moon, Sun, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export function PrayerTracker() {
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});
  const { toast } = useToast();

  // Updated prayer times for Somalia (Mogadishu)
  const prayers = [
    { name: "Fajr", time: "4:45 AM", completed: false },
    { name: "Dhuhr", time: "12:15 PM", completed: false },
    { name: "Asr", time: "3:30 PM", completed: false },
    { name: "Maghrib", time: "6:15 PM", completed: false },
    { name: "Isha", time: "7:30 PM", completed: false },
  ];

  const handleAzanToggle = async (prayerName: string) => {
    try {
      if (isPlaying === prayerName) {
        // Stop playing
        audioRefs.current[prayerName]?.pause();
        audioRefs.current[prayerName].currentTime = 0;
        setIsPlaying(null);
      } else {
        // Stop any currently playing audio
        if (isPlaying) {
          audioRefs.current[isPlaying]?.pause();
          audioRefs.current[isPlaying].currentTime = 0;
        }

        // Start playing new audio
        if (!audioRefs.current[prayerName]) {
          const { data } = await supabase.storage
            .from('azan_audio')
            .getPublicUrl('azan.mp3');

          const audio = new Audio(data.publicUrl);
          audioRefs.current[prayerName] = audio;

          audio.addEventListener('ended', () => {
            setIsPlaying(null);
          });
        }

        audioRefs.current[prayerName]?.play().catch((error) => {
          toast({
            title: "Playback Error",
            description: "Unable to play Azan audio. Please try again.",
            variant: "destructive",
          });
          console.error('Audio playback error:', error);
        });
        setIsPlaying(prayerName);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to play Azan audio. Please try again.",
        variant: "destructive",
      });
      console.error('Error handling Azan toggle:', error);
    }
  };

  return (
    <div className="grid gap-4">
      {prayers.map((prayer) => (
        <div
          key={prayer.name}
          className="flex items-center justify-between p-4 bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-sm rounded-lg transition-all hover:bg-white/30 border border-white/20 shadow-lg"
        >
          <div className="flex items-center gap-3">
            {prayer.name === "Fajr" ? (
              <Moon className="w-6 h-6 text-primary animate-pulse" />
            ) : (
              <Sun className="w-6 h-6 text-primary animate-pulse" />
            )}
            <span className="font-medium text-lg">{prayer.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-secondary">{prayer.time}</span>
            <button
              onClick={() => handleAzanToggle(prayer.name)}
              className="p-2 hover:bg-accent/10 rounded-full transition-colors"
              title={isPlaying === prayer.name ? "Stop Azan" : "Play Azan"}
            >
              {isPlaying === prayer.name ? (
                <VolumeX className="w-5 h-5 text-primary animate-pulse" />
              ) : (
                <Volume2 className="w-5 h-5 text-primary hover:scale-110 transition-transform" />
              )}
            </button>
            <input
              type="checkbox"
              checked={prayer.completed}
              className="w-5 h-5 rounded-full border-2 border-primary text-primary focus:ring-primary transition-transform hover:scale-110"
              onChange={() => {}}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
