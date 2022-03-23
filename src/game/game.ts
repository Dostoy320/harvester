import Phaser from "phaser";
import GameScene from "./scenes/gamescene";


function launch(containerId: string) {
    return new Phaser.Game({
        type: Phaser.AUTO,
        parent: containerId,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: [
            GameScene
        ],
        scale: {
            mode: Phaser.Scale.FIT,
            width: '100%',
            height: '100%'
        }
    });
}

export default launch;
export { launch }