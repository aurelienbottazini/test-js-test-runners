const sum1907 = require('../sum1907.js');

test('adds 94 + 13 to equal 107 + 0.44455845654554005', () => {
  expect(sum1907(94, 13)).toBe(107 + 0.44455845654554005);
});