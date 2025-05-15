const sum = require('../sum');

test('adds 90 + 22 to equal 112', () => {
  expect(sum(90, 22)).toBe(112);
});