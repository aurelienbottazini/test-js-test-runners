const sum912 = require('../sum912.js');

test('adds 64 + 25 to equal 89 + 0.47555775894935637', () => {
  expect(sum912(64, 25)).toBe(89 + 0.47555775894935637);
});