const sum = require('../sum');

test('adds 25 + 87 to equal 112', () => {
  expect(sum(25, 87)).toBe(112);
});