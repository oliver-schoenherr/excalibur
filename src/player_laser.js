import {Actor, Sprite, vec} from "../excalibur.js";
import {Images} from "./resources.js";

export class PlayerLaser extends Actor {
  constructor(pos) {
    super({
      pos: pos,
      width: 208,
      height: 256,
      vel: vec(0, -300),
    });

    this.on('exitviewport', () => this.kill());
  }

  onInitialize() {
    this.graphics.use(new Sprite({
        image: Images.Laser,
        destSize: {
          width: 208 / 4,
          height: 256 / 4,
        },
      })
    );
  }

  onPostUpdate(engine, delta) {
  }
}
