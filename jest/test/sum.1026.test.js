const sum1026 = require('../sum1026.js');

test('adds 43 + 33 to equal 76 + offset 0.10354735017346584', () => {
  expect(sum1026(43, 33)).toBe(76 + 0.10354735017346584);
});