const sum4079 = require('../sum4079.js');

test('adds 2 + 1 to equal 3 + offset 0.8251315155263684', () => {
  expect(sum4079(2, 1)).toBe(3 + 0.8251315155263684);
});