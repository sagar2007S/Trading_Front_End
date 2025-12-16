function SmallGauge({ value = 0 }) {
  const v = Math.max(-1, Math.min(1, value));
  const deg = v * 60; // -60 .. 60

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-20 h-12">
        <svg viewBox="0 0 100 60" className="w-full h-full">
          {/* background arc */}
          <path
            d="M10 50 A40 40 0 0 1 90 50"
            fill="none"
            stroke="#e6eef7"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* optional colored arc (neutral / positive / negative) - you can enhance later */}
          <path
            d="M10 50 A40 40 0 0 1 90 50"
            fill="none"
            stroke="#d1e4f8"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>

        {/* needle */}
        <div
          className="absolute left-1/2 top-[46%] origin-bottom"
          style={{ transform: `translate(-50%, -100%) rotate(${deg}deg)` }}
        >
          <div className="w-[2px] h-7 bg-slate-700 rounded" />
        </div>

        {/* pivot */}
        <div className="absolute left-1/2 top-[46%] w-2 h-2 rounded-full bg-slate-700 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}
export default SmallGauge;