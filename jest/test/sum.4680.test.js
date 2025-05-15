const sum = require('../sum');

test('adds 78 + 68 to equal 146', () => {
  expect(sum(78, 68)).toBe(146);
});