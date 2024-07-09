import { Canvas } from "@react-three/fiber";
import { Backdrop, useAnimations, useFBX } from "@react-three/drei";
import { useEffect } from "react";
import { PerspectiveCamera } from "three";

function MainCharacter() {
  const fbx = useFBX("/Wizard_Gnome.fbx");
  const { actions } = useAnimations(fbx.animations, fbx);

  useEffect(() => {
    actions["Wizard_Gnome_Armature|idle"]?.play();
  }, []);

  // @ts-ignore
  fbx.children[1].material.alphaMap = null;
  fbx.children[1].castShadow = true;
  fbx.children[1].receiveShadow = true;

  return <primitive object={fbx} scale={[0.02, 0.02, 0.02]} castShadow />;
}

function App() {
  let camera = new PerspectiveCamera (90, 1.5, 0.1, 1000);
  camera.position.set(0, 1.5, 8);
  camera.fov = 42;

  return (
    <Canvas
      flat
      linear
      shadows="soft"
      camera={camera}
    >
      <ambientLight intensity={2.25} />
      <directionalLight
        intensity={2}
        color="#efefef"
        position={[0, 20, 5]}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />

      <MainCharacter />

      <group scale={[50, 10, 5]} position={[0, -0.01, -3]}>
        <Backdrop floor={2} segments={10} receiveShadow>
          <meshStandardMaterial color="#9e9e9e" />
        </Backdrop>
      </group>
    </Canvas>
  );
}

export default App;
