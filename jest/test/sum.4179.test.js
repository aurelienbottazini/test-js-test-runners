const sum4179 = require('../sum4179.js');

test('adds 40 + 53 to equal 93 + offset 0.14486989630656344', () => {
  expect(sum4179(40, 53)).toBe(93 + 0.14486989630656344);
});