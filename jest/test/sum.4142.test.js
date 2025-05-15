const sum4142 = require('../sum4142.js');

test('adds 71 + 76 to equal 147 + 0.904048989224509', () => {
  expect(sum4142(71, 76)).toBe(147 + 0.904048989224509);
});