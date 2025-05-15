const sum1215 = require('../sum1215.js');

test('adds 43 + 76 to equal 119 + offset 0.33886885437932435', () => {
  expect(sum1215(43, 76)).toBe(119 + 0.33886885437932435);
});