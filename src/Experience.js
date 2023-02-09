// import React, { useState, useEffect } from 'react';
// import { PerspectiveCamera, Float, OrbitControls } from '@react-three/drei';
// import { Suspense } from 'react';
// import { useControls } from 'leva';
// import Camera from './CameraControl.js'
// import Placeholder from './Placeholder.js';
// import Model from './model.js';
// import Linda from './Linda.js';
// import Aboutme from './aboutme.js';
// import Credit from './computer.js';
// import Blog from './Blog.js';
// import SignAboutme from './AboutmeT.js';
// import ProjectSign from './Project.js';
// import LoadingProgress from './Loader.js'; // Your custom LoadingProgress component

// export default function Experience()
// {
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate some async operation
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   }, []);

//   //debug
//   const { position } = useControls({
//     position: {
//       value: { x:0, y:0, z:0 },
//       step: 0.01
//     }
//   });

//   return ( 
//     <> 
//       { isLoading && <LoadingProgress /> }

//       <pointLight position={[ 10, 10, 10]} />

//       <Camera />
        
//       <OrbitControls target0={ [ 1, 5, 0]} maxPolarAngle={1.45} />

//       <PerspectiveCamera makeDefault fov={50} position={[ 15, 2, 0]} />

//       <directionalLight castShadow position={ [ 3, 2, 5 ] } intensity={ 2 } shadow-normalBias={ 1 } />

//       <ambientLight intensity={ 0.3 } />
        
//       <Float rotationIntensity={ 0.13 }>
//         <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10000 }>
//           <planeGeometry position= { [ 0, 0, 0 ] } />
//           <meshStandardMaterial color="#23C1DA"  />
//         </mesh>
//       </Float>
        
//       <Suspense fallback = { <Placeholder position-x = { -1 } scale = { [1, 1, 1]} /> } >
//         <Model scale = { 3 } onClick = {EventTarget} position = { [ position.x, position.y, 0 ] } />
//       </Suspense>

//       <Linda />
//       <Aboutme />
//       <Credit />
//       <Blog />
//       <SignAboutme />
//       <ProjectSign />
//     </>
//   )
// }


import React from 'react';
import { PerspectiveCamera, Float, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { useControls } from 'leva';
import Camera from './CameraControl.js'
import Placeholder from './Placeholder.js';
import Model from './model.js';
import Linda from './Linda.js';
import Aboutme from './aboutme.js';
import Credit from './computer.js';
import Blog from './Blog.js';
import SignAboutme from './AboutmeT.js';
import ProjectSign from './Project.js';
// import LoadingProgress from './Loader.js';
// import FadeLoader from "react-spinners/FadeLoader";
// import { useState, useEffect } from 'react';

// import CreditSign from './Credit.js';




export default function Experience()
{
    //debug
    const { position } = useControls(
    {
        position:
        {
            value: { x:0, y:0, z:0 },
            step: 0.01
        }
    })
    

    return ( 
    <> 
            
            
            {/* <FadeLoader color="#e380df" />     */}  
               
            <pointLight position={[ 10, 10, 10]} />

            <Camera />
        
            <OrbitControls target0={ [ 1, 5, 0]} maxPolarAngle={1.45} />

            <PerspectiveCamera makeDefault fov={50} position={[ 15, 2, 0]} />

            <directionalLight castShadow position={ [ 3, 2, 5 ] } intensity={ 2 } shadow-normalBias={ 1 } />

            <ambientLight intensity={ 0.3 } />
        
            <Float rotationIntensity={ 0.13 }>
                <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10000 }>
                <planeGeometry position= { [ 0, 0, 0 ] } />
                <meshStandardMaterial color="#23C1DA"  />
                </mesh>
            </Float>
        
            <Suspense fallback = { <Placeholder position-x = { -1 } scale = { [1, 1, 1]} /> } >
                <Model scale = { 3 } onClick = {EventTarget} position = { [ position.x, position.y, 0 ] } />
            </Suspense>

            <Linda />
            <Aboutme />
            <Credit />
            <Blog />
            <SignAboutme />
            <ProjectSign />
            
       
        
    </>
    )
}