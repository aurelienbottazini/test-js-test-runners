const sum = require('../sum');

test('adds 68 + 43 to equal 111', () => {
  expect(sum(68, 43)).toBe(111);
});