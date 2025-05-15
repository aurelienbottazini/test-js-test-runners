const sum4415 = require('../sum4415.js');

test('adds 83 + 13 to equal 96 + offset 0.5672202590498283', () => {
  expect(sum4415(83, 13)).toBe(96 + 0.5672202590498283);
});