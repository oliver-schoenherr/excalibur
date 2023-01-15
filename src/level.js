import {Player} from "./player.js";
import {Scene} from "../excalibur.js";
import {PlayerInputSystem} from "./player_input_system.js";
import {PlayerMovementSystem} from "./player_movement_system.js";
import {Asteroid} from "./asteroid.js";

export class Level extends Scene {

  onInitialize(engine) {
    const player = new Player();
    this.add(player);
    Asteroid.startSpawner(engine);
    this.world.add(new PlayerInputSystem(engine));
    this.world.add(new PlayerMovementSystem());
  }
}
