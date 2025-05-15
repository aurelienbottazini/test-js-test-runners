const sum2407 = require('../sum2407.js');

test('adds 81 + 71 to equal 152 + offset 0.04886513015955429', () => {
  expect(sum2407(81, 71)).toBe(152 + 0.04886513015955429);
});