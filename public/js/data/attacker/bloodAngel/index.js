import character from './character.js';
import battleline from './battleline.js';
import dedicatedTransport from './dedicatedTransport.js';
import other from './other.js';

const bloodAngels = {
  ...character,
  ...battleline,
  ...dedicatedTransport,
  ...other
};

export default bloodAngels;
