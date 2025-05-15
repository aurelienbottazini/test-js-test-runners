const sum2004 = require('../sum2004.js');

test('adds 22 + 51 to equal 73 + 0.9348292754220702', () => {
  expect(sum2004(22, 51)).toBe(73 + 0.9348292754220702);
});