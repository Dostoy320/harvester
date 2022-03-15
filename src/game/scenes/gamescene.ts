import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene {

    public token: Phaser.GameObjects.Rectangle;
    public x: number = 10;
    public y: number = 20;
    constructor() {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        
    }

    create() {
        
        this.token = this.add.rectangle(30, 30, 40, 40, 0x00ffff).setInteractive();
        this.input.setDraggable(this.token);
        this.input.on('drag', (pointer: any, gameObject: any, dragX:any , dragY: any) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
    }

    update() {
      this.x++
      this.y++
      this.token.setPosition(this.x, this.y)
    }
}