import { useGLTF } from '@react-three/drei';
import { BrowserRouter as Router} from 'react-router-dom';

export default function Blog()
{
    const Blog = useGLTF('./blog.glb')
    const handleAnchorClick = event => {
        event.BrowserRouter(true)
        // failed
        // use event.preventDefault() if you want
        // prevent navigation
        // event.preventDefault();
        // console.log('Anchor element clicked');

        // refer to the link element
        // console.log(event.currentTarget);
    };

    return (
        <>
        <Router>
            {/* <a href = "https://oyeoiiblog.com" target = "_blank" rel = "noreferer"> */}
                <primitive 
                    object={ Blog.scene }
                    scale={ 3 }
                    position={ [ -5.3, -1, 0.5 ] }
                    rotation-y={ -1 }
                    onClick = {handleAnchorClick}
                />
            {/* </a> */}
 
        </Router>
            
        </>
    ) 
}





// 2
// import React, { useEffect, useState } from 'react';
// import * as THREE from 'three';

// const Blog = () => {
//   const [loading, setLoading] = useState(true);
//   const [model, setModel] = useState(null);

//   useEffect(() => {
//     const loader = new THREE.GLTFLoader();

//     loader.load('blog.glb', (glt) => {
//       setModel(glt.scene);
//       setLoading(false);
//     });
//   }, []);

//   return loading ? (
//     <div>Loading...</div>
//   ) : (
//     <div>
//       <h1>Blog Page</h1>
//       <div>
//         {model}
//       </div>
//     </div>
//   );
// };

// export default Blog;



    // return (
    //     <primitive 
    //         object={ Blog.scene }
    //         scale={ 3 }
    //         position={ [ -5.3, -1, 0.5 ] }
    //         rotation-y={ -1 }
    //         onClick = {handleAnchorClick}
    //     />
    // ) 

