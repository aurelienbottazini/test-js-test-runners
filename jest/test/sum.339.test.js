const sum = require('../sum');

test('adds 80 + 61 to equal 141', () => {
  expect(sum(80, 61)).toBe(141);
});