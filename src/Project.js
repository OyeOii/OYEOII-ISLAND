import { useGLTF } from '@react-three/drei';
import * as React from 'react';
// import { Vector3 } from 'three';

// import { Setup } from '../setup';
// import { Sparkles, PerspectiveCamera } from '../../src';

export default function ProjectSign()
{
    const ProjectSign = useGLTF('./project.glb')
    // const SparklesStory = ({ random, size, amount, ...props }) => {
    //     const size = React.useMemo(() => {
    //         return new Float32Array(Array.from({ length: amount }, () => Math.random() * size))
    //     }, [size, amount])
    // }

    return (
        <>
            {/* <Sparkles {...props} size={random} color="orange" count={amount} />
            <PerspectiveCamera position = {[ 2, 2, 2 ]} makeDefault /> */}

            <primitive 
                object={ ProjectSign.scene }
                scale={ 3 }
                position={ [ -5.3, -1, 0.45 ] }
                rotation-y={ -1 }
                onClick = { ( event ) => 
                    {
                        (event.eventObject.SparklesStory())
            
                    }
                }
            />
        </>
    )
}

// SparklesStory.args = {
//     size: 5,
//     opacity: 1,
//     amount: 100,
//     speed: 0.3,
//     noise: 1,
//     random: true,
// }

// SparklesStory.argsType = {
//     amount: {
//         control: {
//             type: 'range',
//             max: 500,
//             step: 1,
//         },
//     },
//     noise: {
//         control: {
//             type:'range',
//             max: 1,
//             step: 0.01,
//         },
//     },
//     size: {
//         control: {
//             type: 'range',
//             max: 10,
//             step: 1,
//         },
//     },
//     speed: {
//         control: {
//             type: 'range',
//             max: 20,
//             step: 0.1,
//         },
//     },
//     opacity: {
//         control: {
//             type: 'range',
//             max: 1,
//             step: 0.01,
//         },
//     },
// }

// SparklesStory.storyName = 'Basic'