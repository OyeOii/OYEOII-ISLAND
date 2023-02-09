import { useGLTF } from '@react-three/drei'

export default function SignAboutme()
{
    const Sign = useGLTF('./aboutmetag.glb')
    

    return <primitive 
        object={ Sign.scene }
        scale={ 3 }
        position={ [ -5.5, -0.9, 0.52 ] }
        rotation-y={ -1 }
        onClick = { ( event ) => 
            {
                console.log(event.eventObject)
            
            }
        }
    />
}