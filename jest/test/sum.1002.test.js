const sum1002 = require('../sum1002.js');

test('adds 62 + 86 to equal 148 + offset 0.5320426650306969', () => {
  expect(sum1002(62, 86)).toBe(148 + 0.5320426650306969);
});