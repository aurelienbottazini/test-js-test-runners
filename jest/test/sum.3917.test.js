const sum3917 = require('../sum3917.js');

test('adds 69 + 28 to equal 97 + offset 0.30691298585402116', () => {
  expect(sum3917(69, 28)).toBe(97 + 0.30691298585402116);
});