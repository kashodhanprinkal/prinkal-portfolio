// components/ui/SubjectLine.jsx
"use client";

export default function SubjectLine({ 
  text, 
  highlight, 
  className = "",
  accent = "gold", // gold, blue, pink, green, white
}) {
  const highlightWords = Array.isArray(highlight) ? highlight : [highlight];
  const regex = new RegExp(`(${highlightWords.join("|")})`, "gi");
  const parts = text.split(regex);

  const accentColors = {
    gold: {
      text: "text-[#FFD700]",
      bg: "bg-gradient-to-r from-yellow-400/20 to-amber-500/20",
    },
    blue: {
      text: "text-[#60A5FA]",
      bg: "bg-gradient-to-r from-blue-400/20 to-blue-600/20",
    },
    pink: {
      text: "text-[#F472B6]",
      bg: "bg-gradient-to-r from-pink-400/20 to-rose-500/20",
    },
    green: {
      text: "text-[#34D399]",
      bg: "bg-gradient-to-r from-emerald-400/20 to-green-500/20",
    },
    white: {
      text: "text-white",
      bg: "bg-gradient-to-r from-white/20 to-white/10",
    },
    purple: {
      text: "text-[#A78BFA]",
      bg: "bg-gradient-to-r from-purple-400/20 to-violet-500/20",
    },
    orange: {
      text: "text-[#FB923C]",
      bg: "bg-gradient-to-r from-orange-400/20 to-amber-500/20",
    },
  };

  const color = accentColors[accent] || accentColors.gold;

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Black Glass Background */}
      <div className="relative inline-block px-8 py-4 rounded-2xl backdrop-blur-md bg-black/40 border border-white/10 shadow-2xl">
        {/* Glass Reflection Effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12" />
          <div className="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl" />
          <div className="absolute bottom-0 left-0 h-1/4 w-full bg-gradient-to-t from-white/5 to-transparent rounded-b-2xl" />
        </div>

        {/* Content */}
        <p className="relative text-white/90 text-base md:text-lg leading-relaxed font-light tracking-wide">
          {parts.map((part, index) => {
            const isHighlight = highlightWords.some(
              (word) => word.toLowerCase() === part.toLowerCase()
            );

            if (isHighlight) {
              return (
                <span 
                  key={index} 
                  className={`${color.text} font-semibold ${color.bg} px-1.5 py-0.5 rounded`}
                >
                  {part}
                </span>
              );
            }

            return <span key={index}>{part}</span>;
          })}
        </p>
      </div>
    </div>
  );
}