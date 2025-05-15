const sum4988 = require('../sum4988.js');

test('adds 80 + 53 to equal 133 + 0.4448235307633577', () => {
  expect(sum4988(80, 53)).toBe(133 + 0.4448235307633577);
});