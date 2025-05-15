const sum = require('../sum');

test('adds 43 + 68 to equal 111', () => {
  expect(sum(43, 68)).toBe(111);
});