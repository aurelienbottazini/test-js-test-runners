const sum1126 = require('../sum1126.js');

test('adds 87 + 65 to equal 152 + 0.39760877345659573', () => {
  expect(sum1126(87, 65)).toBe(152 + 0.39760877345659573);
});