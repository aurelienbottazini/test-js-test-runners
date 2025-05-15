const sum4561 = require('../sum4561.js');

test('adds 59 + 5 to equal 64 + 0.5962865359993723', () => {
  expect(sum4561(59, 5)).toBe(64 + 0.5962865359993723);
});