import {Actor, Random, Sprite, Timer, vec} from "../excalibur.js";
import {Images} from "./resources.js";

export class Asteroid extends Actor {
  constructor(pos) {
    super({
      pos: pos,
      width: 256 / 4,
      height: 276 / 4,
      vel: vec(0, 100),
    });

    this.on('exitviewport', () => this.kill());
  }

  onInitialize() {
    this.graphics.use(new Sprite({
        image: Images.Asteroid,
        destSize: {
          width: 256 / 4,
          height: 276 / 4,
        },
      })
    );
  }

  static startSpawner(engine) {
    const random = new Random(1337)
    const timer = new Timer({
      random,
      randomRange: [0, 500],
      interval: 500,
      repeats: true,
      fcn: () => {
        engine.add(new Asteroid(vec(random.integer(0, engine.drawWidth), 0)))
      }
    })
    engine.add(timer);
    timer.start()
  }

  onPostUpdate(engine, delta) {
  }
}
