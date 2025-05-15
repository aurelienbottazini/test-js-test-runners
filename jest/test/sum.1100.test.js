const sum1100 = require('../sum1100.js');

test('adds 65 + 26 to equal 91 + offset 0.3123374781324767', () => {
  expect(sum1100(65, 26)).toBe(91 + 0.3123374781324767);
});