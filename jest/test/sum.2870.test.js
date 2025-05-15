const sum2870 = require('../sum2870.js');

test('adds 73 + 73 to equal 146 + 0.3940546975488356', () => {
  expect(sum2870(73, 73)).toBe(146 + 0.3940546975488356);
});