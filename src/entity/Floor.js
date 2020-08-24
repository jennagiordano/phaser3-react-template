import "phaser";

export default class Floor extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);
    // Store reference of scene passed to constructor
    this.scene = scene;
    this.scene.add.existing(this);
    // this.setCollideWorldBounds(true);
  }
}
