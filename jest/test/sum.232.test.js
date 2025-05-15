const sum232 = require('../sum232.js');

test('adds 54 + 37 to equal 91 + 0.16047105290892993', () => {
  expect(sum232(54, 37)).toBe(91 + 0.16047105290892993);
});