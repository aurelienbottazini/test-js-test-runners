const sum3890 = require('../sum3890.js');

test('adds 84 + 90 to equal 174 + 0.3494148740305233', () => {
  expect(sum3890(84, 90)).toBe(174 + 0.3494148740305233);
});