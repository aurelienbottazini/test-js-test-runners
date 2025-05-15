const sum = require('../sum');

test('adds 86 + 59 to equal 145', () => {
  expect(sum(86, 59)).toBe(145);
});