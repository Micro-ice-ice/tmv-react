import {graphicsModes} from '../../models/graphicModes';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {sceneBackgrounds} from '../../models/sceneBackgrounds';

interface renderState {

    cameraPosition: [
        x: number,
        y: number,
        z: number
    ];
    sceneBackground: sceneBackgrounds;
    graphicMode: graphicsModes;
}

const initialState: renderState = {

    cameraPosition: [0, -35, 6],
    sceneBackground: sceneBackgrounds.Black,
    graphicMode: graphicsModes.Surface
};

export const renderSlice = createSlice({
    name: 'render',
    initialState,
    reducers: {
        changeGraphicMode(state, action: PayloadAction<graphicsModes>){
            state.graphicMode = action.payload;
        },
        changeSceneBackground(state, action: PayloadAction<sceneBackgrounds>) {
            state.sceneBackground = action.payload;
        },
        changeCameraPosition(state, action: PayloadAction<[x: number, y: number, z: number]>) {
            state.cameraPosition = action.payload;
        }
    }
});

export default renderSlice.reducer;
