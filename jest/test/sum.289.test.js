const sum289 = require('../sum289.js');

test('adds 59 + 73 to equal 132 + 0.2278018118253884', () => {
  expect(sum289(59, 73)).toBe(132 + 0.2278018118253884);
});