"use client";

import LandingScreen from "@/components/home/LandingScreen";
import AboutMe from "@/components/home/AboutMe";
import AnimationWrapper from "@/components/containers/AnimationWrapper";
import AboutMePicture from "@/components/home/AboutMePicture";
import Statement from "@/components/home/Statement";
import WaveExperience from "@/components/home/WaveExperience";
import { Canvas } from "@react-three/fiber";
import waveStyles from "../components/home/waveExperience.module.css";

export default function Home() {
  return (
    <AnimationWrapper>
      <main>
        <LandingScreen />
        <AboutMe />
        <AboutMePicture />
        <Statement />
        <Canvas className={waveStyles.container}>
          <WaveExperience />
        </Canvas>
      </main>
    </AnimationWrapper>
  );
}
