import data from '../data/data.json';
import {Mesh} from 'three-model-visualization';
export default class MeshService{

    static  getMesh() : Mesh {
        const mesh = new Mesh(data);
        return mesh;
    }
}
