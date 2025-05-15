const sum4571 = require('../sum4571.js');

test('adds 94 + 48 to equal 142 + 0.1638316673684227', () => {
  expect(sum4571(94, 48)).toBe(142 + 0.1638316673684227);
});