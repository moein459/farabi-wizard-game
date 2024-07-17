import { useAnimations, useFBX } from "@react-three/drei";
import { useEffect } from "react";
import { usePlayerStore } from "../state/player";

function MainCharacter() {
  const fbx = useFBX("/Wizard_Gnome.fbx");
  const { actions, mixer } = useAnimations(fbx.animations, fbx);

  const playerStore = usePlayerStore();

  useEffect(() => {
    const idleAction = actions["Wizard_Gnome_Armature|idle"]!;
    const agreeAction = actions["Wizard_Gnome_Armature|agree"]!;
    agreeAction.clampWhenFinished = true;

    const disagreeAction = actions["Wizard_Gnome_Armature|disagree"]!;
    disagreeAction.clampWhenFinished = true;

    idleAction.play();

    usePlayerStore.subscribe((curr, prev) => {
      // if (curr.status === prev.status) return;

      if (curr.status === "RIGHT") {
        if (agreeAction.isRunning()) return;

        disagreeAction.stop();

        agreeAction.reset();
        agreeAction.play().setLoop(2201, 1).fadeOut(500);
      } else {
        if (disagreeAction.isRunning()) return;

        agreeAction.stop();

        disagreeAction.reset();
        disagreeAction.play().setLoop(2201, 1).fadeOut(500);
      }
    });
  }, []);

  // @ts-ignore
  fbx.children[1].material.alphaMap = null;
  fbx.children[1].castShadow = true;
  fbx.children[1].receiveShadow = true;

  return <primitive object={fbx} scale={[0.02, 0.02, 0.02]} castShadow />;
}

export default MainCharacter;
