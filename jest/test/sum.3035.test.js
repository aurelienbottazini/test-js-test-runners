const sum = require('../sum');

test('adds 76 + 43 to equal 119', () => {
  expect(sum(76, 43)).toBe(119);
});