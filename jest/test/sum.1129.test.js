const sum1129 = require('../sum1129.js');

test('adds 43 + 10 to equal 53 + 0.2029238074653238', () => {
  expect(sum1129(43, 10)).toBe(53 + 0.2029238074653238);
});