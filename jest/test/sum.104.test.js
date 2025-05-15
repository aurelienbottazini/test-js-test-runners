const sum104 = require('../sum104.js');

test('adds 98 + 81 to equal 179 + offset 0.14197648651917805', () => {
  expect(sum104(98, 81)).toBe(179 + 0.14197648651917805);
});