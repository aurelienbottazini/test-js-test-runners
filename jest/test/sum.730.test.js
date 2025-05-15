const sum730 = require('../sum730.js');

test('adds 31 + 87 to equal 118 + offset 0.8158860800696371', () => {
  expect(sum730(31, 87)).toBe(118 + 0.8158860800696371);
});