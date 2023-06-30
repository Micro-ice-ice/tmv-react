import {Color} from 'three';
export default class ColorService{

    private static White = new Color(0xffffff);

    private static DarkGray  = new Color(0x222222);

    private static LightGray = new Color(0x444444);

    private static Black = new Color(0x000000);

    static getColor(name: string){

        switch (name){

        case 'White':
            return ColorService.White;

        case 'DarkGray':
            return ColorService.DarkGray;

        case 'LightGray':
            return ColorService.LightGray;

        case 'Black':
            return ColorService.Black;

        default:
            return ColorService.Black;
        }

    }
}
