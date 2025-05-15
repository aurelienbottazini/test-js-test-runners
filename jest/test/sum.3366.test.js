const sum3366 = require('../sum3366.js');

test('adds 81 + 2 to equal 83 + 0.2484165336406109', () => {
  expect(sum3366(81, 2)).toBe(83 + 0.2484165336406109);
});