// "use client";

// import * as Three from "three";
// // @ts-ignore
// import particlePictureVertexShader from "raw-loader!glslify-loader!../../shaders/particle-picture/vertex.glsl";
// // @ts-ignore
// import particlePictureFragmentShader from "raw-loader!glslify-loader!../../shaders/particle-picture/fragment.glsl";
// import { useRef } from "react";
// import { useFrame, useLoader, useThree } from "@react-three/fiber";

// type Props = {
//   pixelRatio: number;
//   setCanvasCursor: React.Dispatch<
//     React.SetStateAction<{ x: number; y: number }>
//   >;
//   canvasTexture: any;
// };

// export default function ParticlePictureExperience({
//   pixelRatio,
//   setCanvasCursor,
//   canvasTexture,
// }: Props) {
//   const shaderRef = useRef<any>();
//   const planeRef = useRef<any>();

//   const { gl, size, raycaster, camera } = useThree();

//   gl.setSize(size.width, size.height);
//   gl.setPixelRatio(pixelRatio);

//   const texture = useLoader(Three.TextureLoader, "/images/airplane.png");

//   const screenCursor = new Three.Vector2(9999, 9999);
//   const canvasCursor = new Three.Vector2(9999, 9999);

//   const intensityArray = new Float32Array(16641);
//   const angleArray = new Float32Array(16641);

//   for (let i = 0; i < 16641; i++) {
//     intensityArray[i] = Math.random();
//     angleArray[i] = Math.random() * Math.PI * 2;
//   }

//   const handleMove = (e: any) => {
//     screenCursor.x = (e.clientX / size.width) * 2 - 1;
//     screenCursor.y = -(e.clientY / size.height) * 2 + 1;
//   };

//   useFrame(() => {
//     raycaster.setFromCamera(screenCursor, camera);
//     const intersections = raycaster.intersectObject(planeRef.current);
//     if (intersections.length) {
//       canvasCursor.x = intersections[0].uv!.x * 128;
//       canvasCursor.y = (1 - intersections[0].uv!.y) * 128;
//       setCanvasCursor(canvasCursor);
//     }
//   });

//   return (
//     <scene>
//       <points position-y={0}>
//         <planeGeometry
//           ref={(ref) => {
//             ref?.setAttribute(
//               "aIntensity",
//               new Three.BufferAttribute(intensityArray, 1)
//             );
//             ref?.setAttribute(
//               "aAngle",
//               new Three.BufferAttribute(angleArray, 1)
//             );
//             ref?.deleteAttribute("normal");
//             ref?.setIndex(null);
//           }}
//           args={[10, 10, 128, 128]}
//         />
//         <shaderMaterial
//           ref={shaderRef}
//           vertexShader={particlePictureVertexShader}
//           fragmentShader={particlePictureFragmentShader}
//           uniforms={{
//             uResolution: new Three.Uniform(
//               new Three.Vector2(
//                 size.width * pixelRatio,
//                 size.height * pixelRatio
//               )
//             ),
//             uPictureTexture: new Three.Uniform(texture),
//             uDisplacementTexture: new Three.Uniform(canvasTexture),
//           }}
//         />
//       </points>
//       <mesh visible={false} ref={planeRef} onPointerMove={handleMove}>
//         <planeGeometry args={[10, 10]} />
//         <meshBasicMaterial color={"red"} />
//       </mesh>
//     </scene>
//   );
// }
