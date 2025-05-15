const sum4125 = require('../sum4125.js');

test('adds 35 + 4 to equal 39 + 0.9751270601272518', () => {
  expect(sum4125(35, 4)).toBe(39 + 0.9751270601272518);
});