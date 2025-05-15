const sum4022 = require('../sum4022.js');

test('adds 52 + 95 to equal 147 + 0.23581520130819178', () => {
  expect(sum4022(52, 95)).toBe(147 + 0.23581520130819178);
});