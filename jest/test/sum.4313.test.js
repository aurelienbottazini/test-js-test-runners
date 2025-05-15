const sum4313 = require('../sum4313.js');

test('adds 26 + 45 to equal 71 + 0.07555414972784458', () => {
  expect(sum4313(26, 45)).toBe(71 + 0.07555414972784458);
});