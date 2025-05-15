const sum4924 = require('../sum4924.js');

test('adds 50 + 75 to equal 125 + 0.7253586025248169', () => {
  expect(sum4924(50, 75)).toBe(125 + 0.7253586025248169);
});