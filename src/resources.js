import {ImageSource, Loader, Sound} from "../excalibur.js";

const Images = {
  Ship: new ImageSource('./../images/ship.png'),
  ShipExplosion: new ImageSource('./../images/ship_explosion.png'),
  Laser: new ImageSource('./../images/laser.png'),
  Asteroid: new ImageSource('./../images/asteroid.png'),
  StaticBackground: new ImageSource('./../images/static_background.png'),
  BackgroundTile: new ImageSource('./../images/background_tile.png'),
}

const Sounds = {
  Laser: new Sound('./../sounds/laser.mp3'),
  Hit: new Sound('./../sounds/hit.mp3'),
}

const loader = new Loader([...Object.values(Images), ...Object.values(Sounds)]);

export { Images, Sounds, loader };
