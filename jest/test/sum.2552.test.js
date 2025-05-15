const sum2552 = require('../sum2552.js');

test('adds 66 + 5 to equal 71 + 0.514695782157712', () => {
  expect(sum2552(66, 5)).toBe(71 + 0.514695782157712);
});