// import * as THREE from 'three';
import { useGLTF } from '@react-three/drei'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

export default function Model()
{
    // const loadingManager = new THREE.LoadingManager();

    // loadingManager.onStart = function(url, loaded, total) {
    //     console.log('Started Loading:${url}');
    // }



    // const GLTFLoader = new GLTFLoader(loadingManager);

    const model = useGLTF('./oyeoiiislandnobeach.glb')


    return <>
        {/* <Clone object={ model.scene } scale={ 0.35 } position-x={ 0 } position-z={ 0 } /> */}

            <primitive 
                object = { model.scene } 
                scale = { 3 } 
                position-y = { -1 } 
                position-x = { -1 } 
                position-z = { 4 } 
                rotation-y = { -0.4 }
                
                
            >
               
            </primitive>
        
        

        </>

}

useGLTF.preload('./oyeoiiislandnobeach.glb')