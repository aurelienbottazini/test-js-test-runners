const sum980 = require('../sum980.js');

test('adds 76 + 35 to equal 111 + 0.6379775078818634', () => {
  expect(sum980(76, 35)).toBe(111 + 0.6379775078818634);
});