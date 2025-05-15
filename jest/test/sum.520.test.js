const sum520 = require('../sum520.js');

test('adds 42 + 88 to equal 130 + offset 0.5750873232818461', () => {
  expect(sum520(42, 88)).toBe(130 + 0.5750873232818461);
});