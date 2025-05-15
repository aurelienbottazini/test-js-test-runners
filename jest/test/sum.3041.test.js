const sum = require('../sum');

test('adds 86 + 23 to equal 109', () => {
  expect(sum(86, 23)).toBe(109);
});