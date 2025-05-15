const sum161 = require('../sum161.js');

test('adds 17 + 81 to equal 98 + 0.45567554934002485', () => {
  expect(sum161(17, 81)).toBe(98 + 0.45567554934002485);
});