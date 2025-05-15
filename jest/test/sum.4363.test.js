const sum4363 = require('../sum4363.js');

test('adds 19 + 31 to equal 50 + 0.6216789347281876', () => {
  expect(sum4363(19, 31)).toBe(50 + 0.6216789347281876);
});