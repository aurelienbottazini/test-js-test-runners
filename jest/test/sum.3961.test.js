const sum = require('../sum');

test('adds 62 + 91 to equal 153', () => {
  expect(sum(62, 91)).toBe(153);
});