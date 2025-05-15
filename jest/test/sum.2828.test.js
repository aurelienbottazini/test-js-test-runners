const sum = require('../sum');

test('adds 60 + 85 to equal 145', () => {
  expect(sum(60, 85)).toBe(145);
});