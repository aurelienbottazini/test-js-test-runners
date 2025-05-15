const sum4575 = require('../sum4575.js');

test('adds 60 + 95 to equal 155 + offset 0.9486382742540307', () => {
  expect(sum4575(60, 95)).toBe(155 + 0.9486382742540307);
});