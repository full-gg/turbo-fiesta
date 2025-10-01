import type { IExtendedScene } from "../../utils/interfaces";
import { BaseObject } from "./base";

export class Background extends BaseObject {
    private sprite: Phaser.GameObjects.TileSprite | undefined;

    constructor(scene: IExtendedScene) {
        super(scene);
        this.init()
    }

    init(): void {
        this.sprite = this.scene.add.tileSprite(
            0,
            0,
            this.scene.cameras.main.width,
            0,
            "background"
        )
    }

    update(): void {
        
    }
}