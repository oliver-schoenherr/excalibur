import {Player} from "./player.js";
import {Scene, vec} from "../excalibur.js";
import {PlayerInputSystem} from "./player_input_system.js";
import {PlayerMovementSystem} from "./player_movement_system.js";
import {Asteroid} from "./asteroid.js";
import {BackgroundManager} from "./background_manager.js";
import {StaticBackground} from "./static_background.js";
import {DestroyedSystem} from "./destroyed_system.js";

export class Level extends Scene {

  onInitialize(engine) {
    this.add(new StaticBackground(engine));
    this.add(new BackgroundManager());
    this.add(new Player());
    Asteroid.startSpawner(engine);
    this.camera.vel = vec(0,-20);
    this.world.add(new PlayerInputSystem(engine));
    this.world.add(new PlayerMovementSystem());
    this.world.add(new DestroyedSystem());
  }
}
