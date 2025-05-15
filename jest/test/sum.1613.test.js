const sum1613 = require('../sum1613.js');

test('adds 34 + 11 to equal 45 + 0.31496573706693687', () => {
  expect(sum1613(34, 11)).toBe(45 + 0.31496573706693687);
});