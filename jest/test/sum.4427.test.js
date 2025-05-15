const sum4427 = require('../sum4427.js');

test('adds 55 + 86 to equal 141 + offset 0.39386704131504546', () => {
  expect(sum4427(55, 86)).toBe(141 + 0.39386704131504546);
});