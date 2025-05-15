const sum1483 = require('../sum1483.js');

test('adds 67 + 35 to equal 102 + offset 0.7827697081598167', () => {
  expect(sum1483(67, 35)).toBe(102 + 0.7827697081598167);
});