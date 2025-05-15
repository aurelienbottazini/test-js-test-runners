const sum12 = require('../sum12.js');

test('adds 18 + 81 to equal 99 + 0.9289575907433442', () => {
  expect(sum12(18, 81)).toBe(99 + 0.9289575907433442);
});