const sum4271 = require('../sum4271.js');

test('adds 32 + 21 to equal 53 + offset 0.8559745234453676', () => {
  expect(sum4271(32, 21)).toBe(53 + 0.8559745234453676);
});