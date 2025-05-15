const sum1879 = require('../sum1879.js');

test('adds 29 + 66 to equal 95 + 0.20482645464741023', () => {
  expect(sum1879(29, 66)).toBe(95 + 0.20482645464741023);
});