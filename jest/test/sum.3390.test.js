const sum = require('../sum');

test('adds 92 + 94 to equal 186', () => {
  expect(sum(92, 94)).toBe(186);
});