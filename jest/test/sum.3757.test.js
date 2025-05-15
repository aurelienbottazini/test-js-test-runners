const sum3757 = require('../sum3757.js');

test('adds 68 + 6 to equal 74 + offset 0.6330426945742103', () => {
  expect(sum3757(68, 6)).toBe(74 + 0.6330426945742103);
});