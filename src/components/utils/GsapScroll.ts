import * as THREE from "three";

// Scroll-linked character and section animations are intentionally disabled
// to keep scrolling immediate and avoid delayed visual updates.
export function setCharTimeline(
  _character: THREE.Object3D<THREE.Object3DEventMap> | null,
  _camera: THREE.PerspectiveCamera
) {
  return;
}

export function setAllTimeline() {
  return;
}

