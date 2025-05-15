const sum1174 = require('../sum1174.js');

test('adds 36 + 17 to equal 53 + 0.1426971362457684', () => {
  expect(sum1174(36, 17)).toBe(53 + 0.1426971362457684);
});