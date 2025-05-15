const sum = require('../sum');

test('adds 65 + 88 to equal 153', () => {
  expect(sum(65, 88)).toBe(153);
});