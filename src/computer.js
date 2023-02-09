import { useGLTF } from '@react-three/drei'

export default function Credit()
{
    const Credit = useGLTF('./laptop.glb')
    

    return <primitive 
        object={ Credit.scene }
        scale={ 3 }
        position={ [ -2, -0.95, 2 ] }
        rotation-y={ 0.2 }
        onClick = { ( event ) => 
            {
                console.log(event.eventObject)
            
            }
        }
    />
}