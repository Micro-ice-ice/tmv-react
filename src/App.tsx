import React from 'react';
import Scene from './components/scene';
import {Canvas} from '@react-three/fiber';

function App() {
    return (
        <div className="h-full">
            <Canvas style={{height: '100vh'}}>
                <Scene>

                </Scene>
            </Canvas>
        </div>
    );
}

export default App;
