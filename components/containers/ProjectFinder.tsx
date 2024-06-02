"use client";

import { projectData } from "@/data";
import { usePathname } from "next/navigation";
import ProjectLayout from "../project-page/ProjectLayout";
import AnimationWrapper from "./AnimationWrapper";

export default function ProjectFinder() {
  const pathname = usePathname();
  const project = projectData.find((i) => i.href === pathname);

  return (
    <AnimationWrapper>
      <main>{project && <ProjectLayout project={project} />}</main>
    </AnimationWrapper>
  );
}
