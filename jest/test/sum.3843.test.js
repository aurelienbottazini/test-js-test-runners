const sum3843 = require('../sum3843.js');

test('adds 34 + 31 to equal 65 + 0.38915126562174407', () => {
  expect(sum3843(34, 31)).toBe(65 + 0.38915126562174407);
});