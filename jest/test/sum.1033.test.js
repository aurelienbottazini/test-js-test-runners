const sum1033 = require('../sum1033.js');

test('adds 34 + 73 to equal 107 + offset 0.6749033077158402', () => {
  expect(sum1033(34, 73)).toBe(107 + 0.6749033077158402);
});