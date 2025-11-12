import React from 'react';
import { Warp } from "@paper-design/shaders-react"

// This is the component you provided, exported for use
export const WarpBackground = () => {
  return (
    // We use the fixed positioning from your example
    <div className="fixed inset-0 -z-10" >
      <Warp
        style={ { width: "100%", height: "100%" } }
        proportion = { 0.45}
        softness = { 1}
        distortion = { 0.25}
        swirl = { 0.8}
        swirlIterations = { 10}
        shape = "checks"
        shapeScale = { 0.1}
        scale = { 1}
        rotation = { 0}
        speed = { 1}
        colors = { ["hsl(0, 70%, 30%)", "hsl(0, 80%, 50%)", "hsl(0, 0%, 15%)", "hsl(0, 0%, 5%)"]}
      />
    </div>
  )
}

export default WarpBackground;