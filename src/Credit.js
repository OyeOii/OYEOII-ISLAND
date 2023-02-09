import { useGLTF } from '@react-three/drei'

export default function CreditSign()
{
    const CreditSign = useGLTF('./creditT.glb')
    

    return <primitive 
        object={ CreditSign.scene }
        scale={ 3 }
        position={ [ 1.55, 1.2, 0.8 ] }
        rotation-y={ 0.04 }
        onClick = { ( event ) => 
            {
                console.log(event.eventObject)
            
            }
        }
    />
}