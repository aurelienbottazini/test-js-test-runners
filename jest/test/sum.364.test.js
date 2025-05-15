const sum = require('../sum');

test('adds 19 + 66 to equal 85', () => {
  expect(sum(19, 66)).toBe(85);
});