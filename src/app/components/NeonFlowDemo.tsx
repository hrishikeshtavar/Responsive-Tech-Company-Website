import React from 'react';
import { TubesBackground } from './ui/neon-flow';
import { MousePointer2 } from 'lucide-react';

export function NeonFlowDemo() {
  return (
    <section className="w-full min-h-screen font-sans" aria-label="Neon Flow demo">
      <TubesBackground className="min-h-screen bg-slate-900">
        <div className="flex flex-col items-center justify-center w-full h-full min-h-screen gap-6 text-center px-4">
          <div className="space-y-2 pointer-events-auto cursor-default">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-[0_0_20px_rgba(0,0,0,1)] select-none">
              Neon Flow
            </h2>
          </div>

          <div className="absolute bottom-8 flex flex-col items-center gap-2 text-white/50 animate-pulse pointer-events-none">
            <span className="flex items-center gap-2 text-xs uppercase tracking-widest">
              <MousePointer2 className="w-4 h-4" />
              Move the cursor around to interact and click to randomize.
            </span>
          </div>
        </div>
      </TubesBackground>
    </section>
  );
}
