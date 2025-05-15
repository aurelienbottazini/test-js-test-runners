const sum = require('../sum');

test('adds 79 + 74 to equal 153', () => {
  expect(sum(79, 74)).toBe(153);
});