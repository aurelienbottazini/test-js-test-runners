const sum1090 = require('../sum1090.js');

test('adds 5 + 25 to equal 30 + 0.9964645734654581', () => {
  expect(sum1090(5, 25)).toBe(30 + 0.9964645734654581);
});