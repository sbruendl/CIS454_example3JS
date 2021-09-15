//FOR QUESTIONS EMAIL
//SBRUENDL@UMASSD.EDU
//STEFAN BRUENDL


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial( { color: 0xaaffff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

cube.position.y = -2;
camera.position.z = 5;








// Instantiate a loader
import { GLTFLoader } from './GLTFLoader.js';
const loader = new GLTFLoader();

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
//const dracoLoader = new DRACOLoader();
//dracoLoader.setDecoderPath( '/examples/js/libs/draco/' );
//loader.setDRACOLoader( dracoLoader );

// Load a glTF resource
loader.load(
	// resource URL
	'Duck.gltf',
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);





var light = new THREE.PointLight( 0x404040, 5 ); // soft white light
light.position.x = -3;
light.position.y = -3;
light.position.z = 3;
light.castShadow = true;
scene.add( light );


var light2 = new THREE.PointLight( 0x404040, 1 ); // soft white light
light2.position.x = 3;
light2.position.y = 3;
light2.position.z = 3;
light2.castShadow = true;
scene.add( light2 );



function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();