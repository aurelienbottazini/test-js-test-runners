const sum628 = require('../sum628.js');

test('adds 63 + 29 to equal 92 + 0.5885134338291387', () => {
  expect(sum628(63, 29)).toBe(92 + 0.5885134338291387);
});