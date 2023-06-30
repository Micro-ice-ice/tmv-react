import React from 'react';
import Scene from './components/scene';
import {Canvas} from '@react-three/fiber';
import {Provider} from 'react-redux';
import setupStore from './store/store';
import Navbar from './components/UI/navbar';

function App() {

    const store = setupStore;

    return (
        // <div className="grid grid-cols-1">
        //     <Navbar/>
        //     <Canvas style={{ position:'absolute', height: '90%', overflow: 'hidden'}}>
        //         <Scene>
        //
        //         </Scene>
        //     </Canvas>
        // </div>
        <div>
            <Navbar/>
            <Canvas style={{height: '95.7vh', overflow: 'hidden'}}>
                <Scene/>
            </Canvas>
        </div>

    );
}

export default App;
