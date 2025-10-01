import {Scene} from "phaser"

import bgImg from '../images/background.png'
import groundImg from '../images/base.png'
import birdImg from '../images/hero.png'
import gameoverImg from '../images/gameover.png'
import numbersImg from '../images/numbers.png'
import numbersJson from '../images/numbers.json'
import pipeImg from '../images/pipe-blue.png'
import dieSound from '../audio/public_audio_die.wav'
import hitSound from '../audio/hit.wav'
import pointSound from '../audio/point.wav'
import wingSound from '../audio/wing.wav'

export class PreloadScene extends Scene {
    constructor() {
        super("preload");
    }

    preload() {
        this.load.image("background", bgImg);
        this.load.image("ground", groundImg);
        this.load.spritesheet("bird", birdImg, {
            frameWidth: 34,
            frameHeight: 24,
        })
        this.load.image("gameover", gameoverImg);
        this.load.atlas("numbers", numbersImg, numbersJson);
        this.load.image("pipe", pipeImg);
        this.load.audio("die", dieSound);
        this.load.audio("hit", hitSound);
        this.load.audio("wing", wingSound);
        this.load.audio("point", pointSound);
    }

    create() {
        this.scene.start("game")
    }
}