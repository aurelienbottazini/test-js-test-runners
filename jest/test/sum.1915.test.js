const sum = require('../sum');

test('adds 79 + 67 to equal 146', () => {
  expect(sum(79, 67)).toBe(146);
});