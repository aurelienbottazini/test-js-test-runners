const sum4732 = require('../sum4732.js');

test('adds 58 + 7 to equal 65 + offset 0.5873258202543296', () => {
  expect(sum4732(58, 7)).toBe(65 + 0.5873258202543296);
});