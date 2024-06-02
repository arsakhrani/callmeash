// import { SetStateAction, useEffect, useRef, useState } from "react";
// import styles from "./displacement.module.css";
// import * as Three from "three";

// type Props = {
//   canvasCursor: {
//     x: number;
//     y: number;
//   };
//   setCanvasTexture: React.Dispatch<SetStateAction<any>>;
// };

// export default function Displacement({
//   canvasCursor,
//   setCanvasTexture,
// }: Props) {
//   const canvasRef = useRef<any>();

//   let canvasTexture = useRef<any>();
//   let glowImage = useRef<any>();

//   const [flag, setFlag] = useState<boolean>(false);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");
//     context.fillRect(0, 0, 128, 128);

//     canvasTexture.current = new Three.CanvasTexture(canvas);
//     setCanvasTexture(canvasTexture.current);

//     glowImage.current = new Image();
//     glowImage.current.src = "/particles/glow.png";

//     setFlag(true);
//   }, [setCanvasTexture]);

//   useEffect(() => {
//     const canvas = canvasRef.current;

//     const context = canvas.getContext("2d");

//     const glowSize = 128 * 0.25;

//     context.globalCompositeOperation = "source-over";
//     context.globalAlpha = 0.02;
//     context.fillRect(0, 0, 128, 128);

//     context.globalCompositeOperation = "lighten";
//     context.globalAlpha = 1;
//     context.drawImage(
//       glowImage.current,
//       canvasCursor.x - glowSize * 0.5,
//       canvasCursor.y - glowSize * 0.5,
//       glowSize,
//       glowSize
//     );
//     if (flag) {
//       canvasTexture.current.needsUpdate = true;
//     }
//   }, [canvasCursor, flag]);

//   return (
//     <canvas
//       ref={canvasRef}
//       width={128}
//       height={128}
//       className={styles.canvas}
//     ></canvas>
//   );
// }
