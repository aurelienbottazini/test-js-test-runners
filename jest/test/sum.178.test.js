const sum178 = require('../sum178.js');

test('adds 48 + 84 to equal 132 + offset 0.8576933738631828', () => {
  expect(sum178(48, 84)).toBe(132 + 0.8576933738631828);
});