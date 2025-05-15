const sum639 = require('../sum639.js');

test('adds 33 + 40 to equal 73 + offset 0.8509079124590505', () => {
  expect(sum639(33, 40)).toBe(73 + 0.8509079124590505);
});