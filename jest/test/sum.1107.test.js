const sum1107 = require('../sum1107.js');

test('adds 75 + 51 to equal 126 + offset 0.824895093778327', () => {
  expect(sum1107(75, 51)).toBe(126 + 0.824895093778327);
});