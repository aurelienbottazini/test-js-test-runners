const sum1325 = require('../sum1325.js');

test('adds 25 + 40 to equal 65 + 0.9326719980999463', () => {
  expect(sum1325(25, 40)).toBe(65 + 0.9326719980999463);
});