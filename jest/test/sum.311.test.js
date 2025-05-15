const sum311 = require('../sum311.js');

test('adds 3 + 49 to equal 52 + 0.4039822906291579', () => {
  expect(sum311(3, 49)).toBe(52 + 0.4039822906291579);
});