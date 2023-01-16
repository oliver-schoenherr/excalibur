import {Actor, CollisionType, Color, ParallaxComponent, Sprite, vec, Vector} from "../excalibur.js";
import {Images} from "./resources.js";

export class BackgroundTile extends Actor {
  constructor(engine, pos) {
    super({
      pos: pos,
      width: engine.screen.resolution.width,
      height: engine.screen.resolution.height,
      z: -99,
      anchor: Vector.Zero,
      collisionType: CollisionType.PreventCollision,
    });
  }

  onInitialize(engine) {
    this.addComponent(new ParallaxComponent(vec(0.5, 0.5)))
    this.graphics.use(new Sprite({
        image: Images.BackgroundTile,
        destSize: {
          width: engine.screen.resolution.width,
          height: engine.screen.resolution.height,
        },
      })
    );

    this.on('exitviewport', () => this.kill());
  }


}
