const sum4232 = require('../sum4232.js');

test('adds 17 + 15 to equal 32 + 0.354120650020071', () => {
  expect(sum4232(17, 15)).toBe(32 + 0.354120650020071);
});