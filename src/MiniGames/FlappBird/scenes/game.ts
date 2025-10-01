import {Scene} from 'phaser'
import type { IExtendedScene } from '../utils/interfaces';
import { Background } from './objects/background';
import type { BaseObject } from './objects/base';



export class GameScene extends Scene implements IExtendedScene {
    gameStarted = false;
    gameOver = false;
    
    private gameObjects: BaseObject[] = []

    constructor() {
        super("game");
    }

    create() {
        this.gameObjects.push(new Background(this));
    }
    update() {
        this.gameObjects.forEach((go) => go.update())
    }
}