import { Backdrop } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import MainCharacter from "./MainCharacter";

let camera = new PerspectiveCamera (90, 1.5, 0.1, 1000);
camera.position.set(0, 1.5, 8);
camera.fov = 42;

function Scene() {
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

export default Scene;