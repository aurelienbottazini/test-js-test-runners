const sum4436 = require('../sum4436.js');

test('adds 8 + 56 to equal 64 + 0.9794233438733795', () => {
  expect(sum4436(8, 56)).toBe(64 + 0.9794233438733795);
});