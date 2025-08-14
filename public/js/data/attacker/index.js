import bloodAngels from './bloodAngel/index.js';
import spaceMarines from './spaceMarine/index.js';

const attackerPreset = {
  ...bloodAngels,
  ...spaceMarines
  // később: más frakciók ide kerülnek (pl. spaceMarines: {...})
};

export default attackerPreset;
