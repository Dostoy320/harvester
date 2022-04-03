import Phaser from 'phaser'
import spacePng from '../../../src/assets/space.png';
import shipPng from '../../../src/assets/ship.png';
import venusPng from '../../../src/assets/venus-transparent.png';
import neptunePng from '../../../src/assets/neptune-transparent.png'

export default class GameScene extends Phaser.Scene {

    public token: Phaser.GameObjects.Rectangle;
    public x: number = 10;
    public y: number = 20;
    public planets: any;
    constructor() {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('space', spacePng);
        this.load.image('ship', shipPng);
        this.load.image('planet_venus', venusPng);
        this.load.image('planet_neptune', neptunePng);
        
    }

    create() {

        this.add.image(300, 300, 'space').setScale(2);

        this.planets = this.physics.add.staticGroup();

        this.planets.create(300, 200, 'planet_venus').setScale(.08);
        this.planets.create(650, 400, 'planet_neptune').setScale(.08);

        const ship = this.add.image(300, 300, 'ship').setScale(.05).setInteractive();
        this.input.setDraggable(ship);
        

        this.input.on('drag', (pointer: any, gameObject: any, dragX:any , dragY: any) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
    }

    update() {
    //   this.token.setPosition(this.x, this.y)
    }
}