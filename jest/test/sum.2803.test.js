const sum2803 = require('../sum2803.js');

test('adds 62 + 96 to equal 158 + 0.1293343658134587', () => {
  expect(sum2803(62, 96)).toBe(158 + 0.1293343658134587);
});