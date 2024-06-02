"use client";

import { useFrame } from "@react-three/fiber";
// @ts-ignore
import waveVertexShader from "raw-loader!glslify-loader!../../shaders/wave/vertex.glsl";
// @ts-ignore
import waveFragmentShader from "raw-loader!glslify-loader!../../shaders/wave/fragment.glsl";
import * as Three from "three";
import { useRef } from "react";

// uninstall leva

export default function WaveExperience() {
  const shaderRef = useRef<any>();
  useFrame((state, delta) => {
    shaderRef.current.uniforms.uTime.value += delta;
  });

  const deepColor = "#186691";
  const surfaceColor = "#9bd8ff";

  return (
    <mesh rotation-x={-Math.PI * 0.2}>
      <planeGeometry args={[80, 10, 25, 25]} />
      <shaderMaterial
        ref={shaderRef}
        uniforms={{
          uTime: { value: 0 },
          uBigWaveElevation: { value: 1.8 },
          uBigWaveFrequency: { value: new Three.Vector2(0.1, 1.5) },
          uBigWaveSpeed: { value: 0.75 },
          uDeepColor: { value: new Three.Color(deepColor) },
          uSurfaceColor: { value: new Three.Color(surfaceColor) },
        }}
        vertexShader={waveVertexShader}
        fragmentShader={waveFragmentShader}
      />
    </mesh>
  );
}
