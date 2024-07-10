import { useAnimations, useFBX } from "@react-three/drei";
import { useEffect } from "react";

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

export default MainCharacter;
