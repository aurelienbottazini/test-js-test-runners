const sum = require('../sum');

test('adds 18 + 4 to equal 22', () => {
  expect(sum(18, 4)).toBe(22);
});