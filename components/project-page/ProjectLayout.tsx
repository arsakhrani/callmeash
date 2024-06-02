import { Data } from "@/data";
import HeroImage from "./HeroImage";
import Features from "./Features";
import Idea from "./Idea";
import Stack from "./Stack";
import Carousel from "./Carousel";

type Props = {
  project: Data;
};

export default function ProjectLayout({ project }: Props) {
  return (
    <div>
      <HeroImage
        tags={project.tags}
        title={project.name}
        heroImage={project.heroImage}
      />
      <Features
        secondaryImage={project.secondaryImage}
        featureStatement={project.featureStatement}
      />
      <Idea
        projectLink={project.projectLink}
        githubLink={project.githubLink}
        idea={project.idea}
      />
      <Stack tags={project.tags} />
      <Carousel images={project.carouselImages} />
    </div>
  );
}
