const sum1658 = require('../sum1658.js');

test('adds 20 + 88 to equal 108 + offset 0.18878375364344924', () => {
  expect(sum1658(20, 88)).toBe(108 + 0.18878375364344924);
});