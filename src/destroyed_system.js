import {GraphicsComponent, System, SystemType, TransformComponent, Vector} from "../excalibur.js";

export class DestroyedSystem extends System {

  types = ["os.destroyed", "ex.graphics"];
  priority = 98;
  systemType = SystemType.Update

  update(entities, delta) {

    for (let entity of entities) {
      entity.removeComponent("os.player_input");
      entity.removeComponent("ex.motion")

      const animation = entity.get("os.destroyed").animation;
      const graphics = entity.get(GraphicsComponent);

      if (animation.done) {
        entity.kill();
      } else if (!animation.started) {
        graphics.use(animation);
        animation.started = true;
      }
    }
  }
}
