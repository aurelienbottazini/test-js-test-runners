const sum = require('../sum');

test('adds 65 + 26 to equal 91', () => {
  expect(sum(65, 26)).toBe(91);
});