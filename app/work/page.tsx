"use client";

import AnimationWrapper from "@/components/containers/AnimationWrapper";
import IntroText from "@/components/work/IntroText";
import WorkShowcase from "@/components/work/WorkShowcase";
import { useState } from "react";
import { Data } from "@/data";

export default function Work() {
  const [projectSelected, setProjectSelected] = useState<Data | null>(null);

  return (
    <AnimationWrapper>
      <main>
        <IntroText projectSelected={projectSelected} />
        <WorkShowcase
          projectSelected={projectSelected}
          setProjectSelected={setProjectSelected}
        />
      </main>
    </AnimationWrapper>
  );
}
