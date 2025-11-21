
'use client'

import * as React from 'react';

export function SplineSceneBasic() {
  return (
    <div 
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: 'black',
        overflow: 'hidden',
      }}
    >
      {/* Robot Layer - Positioned on top with transparency blend */}
      {/* Iframe height is increased to push the bottom-right watermark outside the overflow:hidden container */}
      <iframe 
        src='https://my.spline.design/nexbotrobotcharacterconcept-GRbyeuOUZzjPKxtJLM1PK7Dt/' 
        style={{
            width: '100%',
            height: 'calc(100% + 120px)', // Extend height to crop bottom where watermark is
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 10,
            mixBlendMode: 'screen',
            filter: 'brightness(1) contrast(1.1)',
            pointerEvents: 'auto', // Keep 3D interaction enabled
            border: 'none'
        }}
        title="3D Robot Scene"
      />
    </div>
  )
}
