const sum4982 = require('../sum4982.js');

test('adds 11 + 67 to equal 78 + offset 0.0327957548070652', () => {
  expect(sum4982(11, 67)).toBe(78 + 0.0327957548070652);
});