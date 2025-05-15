const sum = require('../sum');

test('adds 49 + 96 to equal 145', () => {
  expect(sum(49, 96)).toBe(145);
});