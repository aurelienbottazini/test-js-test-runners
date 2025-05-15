const sum553 = require('../sum553.js');

test('adds 49 + 86 to equal 135 + offset 0.6108773047149617', () => {
  expect(sum553(49, 86)).toBe(135 + 0.6108773047149617);
});