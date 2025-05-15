const sum1504 = require('../sum1504.js');

test('adds 39 + 52 to equal 91 + offset 0.4952518479687642', () => {
  expect(sum1504(39, 52)).toBe(91 + 0.4952518479687642);
});