const sum4473 = require('../sum4473.js');

test('adds 10 + 64 to equal 74 + offset 0.19653982483247756', () => {
  expect(sum4473(10, 64)).toBe(74 + 0.19653982483247756);
});