import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MeshService from '../api/meshService';
import {Cell} from 'three-model-visualization';

const Scene = (props: any) => {

    const pointLightRef = useRef<THREE.PointLight>(null);

    const camera = useThree((state) => state.camera);

    const scene = useThree((state) => state.scene);
    scene.background = new THREE.Color(0x222222);

    useFrame(() => {

        const cameraPosition = camera.position;

        pointLightRef.current?.position.set(...cameraPosition.toArray());
    });

    const groupRef = useRef<THREE.Group>(null);

    useEffect(() => {
        console.log('init mesh');
        groupRef.current?.children.forEach(child => {
            const mesh = child as THREE.Mesh;
            mesh.geometry.dispose();
        });
        groupRef.current?.clear();

        Cell.Material = new THREE.MeshLambertMaterial({vertexColors: true});

        const mesh = MeshService.getMesh();
        mesh.Cells.forEach((cell) => {
            groupRef.current?.add(cell.ThreeObject);
        });
    }, []);


    return (
        <>
            <perspectiveCamera fov={45}/>
            <OrbitControls />
            <pointLight color={0xffffff} ref={pointLightRef}/>
            <ambientLight color={0x666666}/>
            <group ref={groupRef}/>
        </>
    );
};

export default Scene;
