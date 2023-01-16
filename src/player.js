import {
  Actor,
  CollisionType
} from "../excalibur.js";
import {Ship} from "./ship.js";
import {ShipExplosion} from "./ship_explosion.js";

export class Player extends Actor {
  constructor() {
    super({
      collisionType: CollisionType.PreventCollision,
    });
  }

  onInitialize(engine) {
    const ship = new Ship();
    ship.on("kill", (event) => {
      engine.add(new ShipExplosion(event.target.pos));
    })
    engine.add(ship);

  }
}
