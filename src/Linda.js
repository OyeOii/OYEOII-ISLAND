// import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
// import { chameleonPlank, chameleonModel } from 'react';



export default function Linda()
{
    const Linda = useGLTF('./Cat/cute_chubby_cat.glb')
    
    // const mouse = new THREE.Vector2()
    // const raycaster2 = new THREE.Raycaster()
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        


    // document.body.addEventListener('click', (e) => {
    //     mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    //     mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    //     raycaster2.setFromCamera(mouse, camera)
    //     // raycaster2.ray.at(distance, mesh.position)
    //     const intersects = raycaster2.intersectObject(chameleonPlank)
    //     const intersectModel = raycaster2.intersectObject(chameleonModel)
    //     if (intersectModel.length > 0) {
    //       console.log('hit')
    //     } else {
    //       console.log('no plank')
    //     }
    //   })
   
    return <>
            
            

            <primitive 
                object = { Linda.scene }
                scale = { 0.02 }
                position = { [ -1.5, -0.5, 0.2] }
                rotation-y = { 1.5 }
                // onPointerOver={() => set(true)} onPointerOut={() => set(false)}

                onClick = { ( event ) => 
                {
                    console.log(event.eventObject)
                
                }
                
            }>
                
            
            </primitive>
        

        </>
    

    
}