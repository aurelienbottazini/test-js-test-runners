const sum605 = require('../sum605.js');

test('adds 61 + 57 to equal 118 + 0.976636642351077', () => {
  expect(sum605(61, 57)).toBe(118 + 0.976636642351077);
});