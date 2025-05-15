const sum4606 = require('../sum4606.js');

test('adds 45 + 58 to equal 103 + offset 0.1597736828038303', () => {
  expect(sum4606(45, 58)).toBe(103 + 0.1597736828038303);
});