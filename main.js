import * as THREE from 'three'

//Scene
const scene = new THREE.Scene();


//Create our sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({ color: '#00ff83' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//light
const light = new THREE.PointLight(0xfff00, 100)
light.position.set(0, 8, 8)
scene.add(light)

//Camera
const camera = new THREE.PerspectiveCamera(35, 600 / 400)
camera.position.z = 20
scene.add(camera)



//Renderer
const canvas = document.querySelector('.webgl')
// console.log(canvas)

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(600, 400)
renderer.render(scene, camera)



