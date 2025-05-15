const sum4642 = require('../sum4642.js');

test('adds 40 + 96 to equal 136 + 0.2922528807560807', () => {
  expect(sum4642(40, 96)).toBe(136 + 0.2922528807560807);
});