const sum2913 = require('../sum2913.js');

test('adds 75 + 5 to equal 80 + 0.48690005558181604', () => {
  expect(sum2913(75, 5)).toBe(80 + 0.48690005558181604);
});