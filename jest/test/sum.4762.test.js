const sum = require('../sum');

test('adds 61 + 84 to equal 145', () => {
  expect(sum(61, 84)).toBe(145);
});