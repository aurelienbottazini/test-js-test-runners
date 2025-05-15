const sum1097 = require('../sum1097.js');

test('adds 56 + 91 to equal 147 + 0.562499757686204', () => {
  expect(sum1097(56, 91)).toBe(147 + 0.562499757686204);
});