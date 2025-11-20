
import * as React from 'react';

// Simple utility to merge class names locally without external dependencies
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

const Spline = React.lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <div
      className={cn(
        'relative w-full h-full rounded-xl overflow-hidden',
        'bg-black flex items-center justify-center',
        className
      )}
    >
      {/* Soft spotlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),rgba(0,0,0,1))]" />

      <React.Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-2 border-gray-400 border-t-transparent" />
          </div>
        }
      >
        <Spline scene={scene} />
      </React.Suspense>
    </div>
  );
}

export default SplineScene;
