const sum38 = require('../sum38.js');

test('adds 7 + 84 to equal 91 + 0.5776697841138759', () => {
  expect(sum38(7, 84)).toBe(91 + 0.5776697841138759);
});