import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// シーン
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// カメラ（ダジック風ならOrthographic）
const aspect = window.innerWidth / window.innerHeight;
const d = 2;

const camera = new THREE.OrthographicCamera(
    -d * aspect,
     d * aspect,
     d,
    -d,
    0.1,
    100
);

camera.position.set(0,0,5);

// レンダラー
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// 操作
const controls = new OrbitControls(camera,renderer.domElement);
controls.enableDamping = true;

// 光
const light = new THREE.DirectionalLight(0xffffff,4);
light.position.set(5,3,5);
scene.add(light);

scene.add(new THREE.AmbientLight(0xffffff,5));

// テクスチャ
const loader = new THREE.TextureLoader();

const Texture = loader.load("textures/earth.jpg");

// 球
const geometry = new THREE.SphereGeometry(1, 512, 512);

const material = new THREE.MeshStandardMaterial({
    map:Texture
});

Texture.colorSpace = THREE.SRGBColorSpace;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const earth = new THREE.Mesh(
    geometry,
    material
);

scene.add(earth);

// アニメーション
function animate(){

    requestAnimationFrame(animate);

    earth.rotation.y += 0.001;

    controls.update();

    renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

    const aspect = window.innerWidth/window.innerHeight;

    camera.left=-d*aspect;
    camera.right=d*aspect;
    camera.top=d;
    camera.bottom=-d;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth,window.innerHeight);

});