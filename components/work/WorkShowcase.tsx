"use client";

import { AnimatePresence, motion } from "framer-motion";
import WindowDisplay from "./WindowDisplay";
import styles from "./workShowcase.module.css";
import { Data, projectData } from "@/data";
import { useRouter } from "next/navigation";

type Props = {
  projectSelected: Data | null;
  setProjectSelected: React.Dispatch<React.SetStateAction<Data | null>>;
};

export default function WorkShowcase({
  setProjectSelected,
  projectSelected,
}: Props) {
  const router = useRouter();

  const selectProject: (project: Data) => void = (project) => {
    setProjectSelected(project);
    setTimeout(() => router.push(project.href), 200);
  };

  return (
    <section className={styles.container}>
      <AnimatePresence>
        {projectData.map((project, i) => {
          if (!projectSelected)
            return (
              <motion.div
                onClick={() => selectProject(project)}
                key={project.id}
                initial={{
                  opacity: 0,
                  translateX: i % 2 === 0 ? -50 : 50,
                  translateY: -50,
                }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: i * 0.2 + 0.6 }}
                exit={{
                  opacity: 0,
                  translateY: -100,
                  transition: { delay: 0 },
                }}
              >
                <WindowDisplay data={project} />
              </motion.div>
            );
        })}
      </AnimatePresence>
    </section>
  );
}
