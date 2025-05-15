const sum = require('../sum');

test('adds 89 + 57 to equal 146', () => {
  expect(sum(89, 57)).toBe(146);
});