import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {renderSlice} from '../store/reducers/renderSlice';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import ColorService from '../api/colorService';
import RenderService from '../api/renderService';

const Scene = () => {

    const {graphicMode, sceneBackground, cameraPosition} = useAppSelector(state => state.renderReducer);

    const {changeCameraPosition} = renderSlice.actions;

    const dispatch = useAppDispatch();

    const pointLightRef = useRef<THREE.PointLight>(null);

    const camera = useThree((state) => state.camera);
    camera.position.set(...cameraPosition);

    const scene = useThree((state) => state.scene);

    useFrame(() => {

        dispatch(changeCameraPosition(camera.position.toArray()));
        pointLightRef.current?.position.set(...camera.position.toArray());
    });

    const groupRef = useRef<THREE.Group>(null);

    useEffect(() => {

        if (groupRef.current){

            RenderService.renderMesh(groupRef.current, graphicMode);
        }
        camera.position.set(...cameraPosition);

    }, [graphicMode]);

    useEffect(() => {

        scene.background = ColorService.getColor(sceneBackground);
        camera.position.set(...cameraPosition);

    }, [sceneBackground]);

    return (
        <>
            <perspectiveCamera fov={45}/>
            <OrbitControls />
            <pointLight color={0xbbbbbb} ref={pointLightRef}/>
            <ambientLight color={0x666666}/>
            <group ref={groupRef}/>
        </>
    );
};

export default Scene;
