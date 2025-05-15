const sum = require('../sum');

test('adds 86 + 60 to equal 146', () => {
  expect(sum(86, 60)).toBe(146);
});