const sum1722 = require('../sum1722.js');

test('adds 42 + 3 to equal 45 + offset 0.6405216192816318', () => {
  expect(sum1722(42, 3)).toBe(45 + 0.6405216192816318);
});