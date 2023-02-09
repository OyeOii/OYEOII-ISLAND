// import * as THREE from 'three';
import './index.css'
import { useGLTF } from '@react-three/drei';
// import { useState } from 'react'


export default function Aboutme()
{
    const Aboutme = useGLTF('./aboutmeintro.glb')
    // const eventHandler = () => {
    //     console.log('the event occured')
    // }

    

    return <primitive 
    object={ Aboutme.scene }
    scale={ 3 }
    position={ [ -1.2, -1, 4.3 ] }
    rotation-y={ -0.4 }
    // onClick = { ( eventHandler ) => { console.log('the event occured')}
    />

}

