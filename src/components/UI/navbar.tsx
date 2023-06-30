import React from 'react';
import MySelect from './mySelect';
import {graphicsModes} from '../../models/graphicModes';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {renderSlice} from '../../store/reducers/renderSlice';
import {sceneBackgrounds} from '../../models/sceneBackgrounds';
import CameraPosition from '../cameraPosition';

const Navbar = () => {

    const {graphicMode, sceneBackground} = useAppSelector(state => state.renderReducer);

    const { changeGraphicMode, changeSceneBackground } = renderSlice.actions;

    const dispatch = useAppDispatch();

    const optionsGraphicMode = Object.values(graphicsModes).map((mode) => ({
        value: mode.toString(),
        name: mode.toString(),
    }));

    const optionsSceneBackground = Object.values(sceneBackgrounds).map((mode) => ({
        value: mode.toString(),
        name: mode.toString(),
    }));

    return (
        <div className="bg-gray-200 py-2 px-4">
            <div className="container flex flex-row justify-start items-center">
                <label className="mx-2">Graphic mode</label>
                <MySelect options={optionsGraphicMode} defaultValue={graphicMode} onChange={value => dispatch(changeGraphicMode(value as graphicsModes))}/>
                <label className="mx-2">Scene background</label>
                <MySelect options={optionsSceneBackground} defaultValue={sceneBackground} onChange={value => dispatch(changeSceneBackground(value as sceneBackgrounds))}/>
                <CameraPosition name={'Camera position'}/>
            </div>
        </div>
    );
};

export default Navbar;
