import {Actor, CollisionType, Sprite, vec} from "../excalibur.js";
import {Images, Sounds} from "./resources.js";
import {Asteroid} from "./asteroid.js";

export class PlayerLaser extends Actor {
  constructor(pos) {
    super({
      pos: pos,
      width: 208 / 4,
      height: 256 / 4,
      vel: vec(0, -300),
      collisionType: CollisionType.Passive,
    });

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
    this.on('collisionstart', this.onCollisionStart.bind(this))
    this.on('exitviewport', () => this.kill());
  }

  onCollisionStart(evt) {
    if(evt.other instanceof Asteroid){
      Sounds.Hit.play();
      evt.other.destroy()
      this.kill();
    }
  }
}
