import {Component, Vector} from "../excalibur.js";

export class PlayerInputComponent extends Component {
  type = 'os.player_input'

  constructor() {
    super();
    this._direction = Vector.Zero;
  }

  get direction() {
    return this._direction;
  }

  set direction(newDirection) {
    this._direction = newDirection;
  }

  get fire() {
    return this._fire;
  }

  set fire(newFire) {
    this._fire = newFire;
  }
}
