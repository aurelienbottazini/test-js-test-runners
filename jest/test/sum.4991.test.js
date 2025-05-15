const sum = require('../sum');

test('adds 23 + 86 to equal 109', () => {
  expect(sum(23, 86)).toBe(109);
});