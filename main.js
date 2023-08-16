import * as THREE from 'three'
import "./style.css"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

//Scene
const scene = new THREE.Scene();


//Create our sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({ color: '#00ff83' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);


//Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}


//light
const light = new THREE.PointLight(0xffffff, 100)
light.position.set(0, 10, 10)
scene.add(light)

//Camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 20
scene.add(camera)





//Renderer
const canvas = document.querySelector('.webgl')
// console.log(canvas)

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

//Resize
window.addEventListener('resize', () => {
  //Update Sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  //Update Camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
})

//controls
const controls = new OrbitControls(camera, canvas)


const loop = () => {
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}
loop()
