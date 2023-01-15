import {System, SystemType, TransformComponent, Vector} from "../excalibur.js";
import {PlayerInputComponent} from "./player_input_component.js";

export class PlayerInputSystem extends System {
  constructor(engine) {
    super();
    this.engine = engine;
    this.buttonPressed = false;

    engine.input.pointers.primary.on('down', function (evt) {
      this.buttonPressed = true;
    }.bind(this))
    engine.input.pointers.primary.on('up', function (evt) {
      this.buttonPressed = false;
    }.bind(this))
  }

  types = ["os.player_input" , 'ex.transform'];
  priority = 98;
  systemType = SystemType.Update

  update(entities, delta) {
    let pointer = this.engine.input.pointers.primary.lastWorldPos;

    for (let entity of entities) {
      const transform = entity.get(TransformComponent);
      const input = entity.get(PlayerInputComponent);

      if (transform.pos.distance(pointer) > 10)
      {
        input.direction = pointer.sub(transform.pos).normalize();
      } else {
        input.direction = Vector.Zero;
      }

      input.fire = this.buttonPressed;
    }
  }
}
