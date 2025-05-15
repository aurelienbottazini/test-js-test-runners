const sum = require('../sum');

test('adds 35 + 84 to equal 119', () => {
  expect(sum(35, 84)).toBe(119);
});