const sum729 = require('../sum729.js');

test('adds 64 + 19 to equal 83 + offset 0.5795869838392882', () => {
  expect(sum729(64, 19)).toBe(83 + 0.5795869838392882);
});