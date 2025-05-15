const sum515 = require('../sum515.js');

test('adds 93 + 40 to equal 133 + 0.9018201152230332', () => {
  expect(sum515(93, 40)).toBe(133 + 0.9018201152230332);
});