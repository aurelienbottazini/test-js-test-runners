const sum3526 = require('../sum3526.js');

test('adds 28 + 38 to equal 66 + 0.7284014901839511', () => {
  expect(sum3526(28, 38)).toBe(66 + 0.7284014901839511);
});