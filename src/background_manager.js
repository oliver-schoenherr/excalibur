import {Actor, vec} from "../excalibur.js";
import {BackgroundTile} from "./background_tile.js";

export class BackgroundManager extends Actor {

  onInitialize(engine) {
    this.lastBackground = new BackgroundTile(engine, vec(0, 0));
    engine.add(this.lastBackground);
  }

  onPostUpdate(engine, delta) {
    if (engine.currentScene.camera.viewport.top < this.lastBackground.pos.y) {
      const additionalBackground = new BackgroundTile(engine, vec(this.lastBackground.pos.x, this.lastBackground.pos.y - this.lastBackground.height));
      engine.add(additionalBackground);
      this.lastBackground = additionalBackground;
    }
  }
}
