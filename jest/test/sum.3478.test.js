const sum3478 = require('../sum3478.js');

test('adds 88 + 41 to equal 129 + 0.7568245280869635', () => {
  expect(sum3478(88, 41)).toBe(129 + 0.7568245280869635);
});