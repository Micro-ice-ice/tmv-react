import * as THREE from 'three';
import MeshService from './meshService';
import {Cell, Points} from 'three-model-visualization';
import {graphicsModes} from '../models/graphicModes';
export default class RenderService{

    static  renderMesh(group: THREE.Group, graphicMode: graphicsModes){

        //clear group
        group.children.forEach(child => {
            const mesh = child as THREE.Mesh;
            mesh.geometry.dispose();
        });
        group.clear();

        switch (graphicMode){

        case graphicsModes.Wireframe: {

            Cell.Material = new THREE.MeshBasicMaterial({
                vertexColors: true,
                wireframe: true,
            });

            const mesh = MeshService.getMesh();
            mesh.Cells.forEach((cell) => {
                group.add(cell.ThreeObject);
            });
            break;
        }

        case graphicsModes.Surface: {

            Cell.Material = new THREE.MeshLambertMaterial({
                vertexColors: true,
            });

            const mesh = MeshService.getMesh();
            mesh.Cells.forEach((cell) => {
                group.add(cell.ThreeObject);
            });
            break;
        }

        case graphicsModes.Points: {

            Points.Material = new THREE.PointsMaterial({
                size: 0.2,
                color: 0x2222ff
            });

            const mesh = MeshService.getMesh();
            const pointsGeometry = new THREE.BufferGeometry().setFromPoints(mesh.Nodes);
            console.log(pointsGeometry);
            group.add(new THREE.Points(pointsGeometry, Points.Material));
            break;
        }

        default:
            break;
        }

    }
}
