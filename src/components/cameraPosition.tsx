import React, {ReactComponentElement, useEffect, useRef} from 'react';
import {useAppSelector} from '../hooks/redux';

interface CameraPositionProps {

    name?: string
}

const CameraPosition: React.FC<CameraPositionProps> = (props: CameraPositionProps) => {

    const xRef = useRef<HTMLInputElement>(null);
    const yRef = useRef<HTMLInputElement>(null);
    const zRef = useRef<HTMLInputElement>(null);

    const {cameraPosition} = useAppSelector(state => state.renderReducer);

    useEffect(() => {

        const [x, y, z] = cameraPosition;
        xRef.current?.setAttribute('value', x.toFixed(2).toString());
        yRef.current?.setAttribute('value', y.toFixed(2).toString());
        zRef.current?.setAttribute('value', z.toFixed(2).toString());

    }, [cameraPosition]);


    return (
        <div>
            {props.name && <label className="mx-2 text-lg">{props.name}</label>}
            <label className="mx-1 text-lg">x</label>
            <input ref={xRef} className="mx-1 w-16 text-center" readOnly={true}/>
            <label className="mx-1 text-lg">y</label>
            <input ref={yRef} className="mx-1 w-16 text-center" readOnly={true}/>
            <label className="mx-1 text-lg">z</label>
            <input ref={zRef} className="mx-1 w-16 text-center" readOnly={true}/>
        </div>
    );
};

export default CameraPosition;
