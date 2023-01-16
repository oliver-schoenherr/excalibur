import {Actor, CollisionType, Color, CoordPlane, Sprite, vec, Vector} from "../excalibur.js";
import {Images} from "./resources.js";

export class StaticBackground extends Actor {
  constructor(engine) {
    super({
      pos: vec(0 ,0),
      width: engine.screen.resolution.width,
      height: engine.screen.resolution.height,
      z: -100,
      anchor: Vector.Zero,
      collisionType: CollisionType.PreventCollision,
      coordPlane: CoordPlane.Screen,
    });
  }

  onInitialize(engine) {
    this.graphics.use(new Sprite({
        image: Images.StaticBackground,
        destSize: {
          width: engine.screen.resolution.width,
          height: engine.screen.resolution.height,
        },
      })
    );
  }


}
