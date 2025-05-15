const sum = require('../sum');

test('adds 96 + 49 to equal 145', () => {
  expect(sum(96, 49)).toBe(145);
});