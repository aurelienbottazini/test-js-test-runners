const sum = require('../sum');

test('adds 86 + 26 to equal 112', () => {
  expect(sum(86, 26)).toBe(112);
});