import {MotionComponent, System, SystemType} from "../excalibur.js";
import {PlayerInputComponent} from "./player_input_component.js";

export class PlayerMovementSystem extends System {
  types = ["os.player_input" , 'ex.motion'];
  priority = 100;
  systemType = SystemType.Update

  update(entities, delta) {
    for (let entity of entities) {
      const input = entity.get(PlayerInputComponent);
      const motion = entity.get(MotionComponent);

      motion.vel = input.direction.scale(400);
    }
  }
}
