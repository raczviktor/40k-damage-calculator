import character from './character.js';
import battleline from './battleline.js';
import dedicatedTransport from './dedicatedTransport.js';
import other from './other.js';

const spaceMarines = {
  ...character,
  ...battleline,
  ...dedicatedTransport,
  ...other
};

export default spaceMarines;
