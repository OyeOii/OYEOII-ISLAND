// import * as THREE from 'three';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.js';
import Loader from './Loader.js'




const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    
    <Canvas
        shadows
        camera={ {
        fov: 50,
        near: 1,
        far: 100,
        position: [ 15, 5, 1 ]
        
    } }
    >
        
        <Experience />
    </Canvas>

   
)

