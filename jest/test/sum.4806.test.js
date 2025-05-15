const sum = require('../sum');

test('adds 55 + 90 to equal 145', () => {
  expect(sum(55, 90)).toBe(145);
});