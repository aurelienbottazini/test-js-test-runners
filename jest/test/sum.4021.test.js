const sum4021 = require('../sum4021.js');

test('adds 81 + 99 to equal 180 + 0.6691593547483249', () => {
  expect(sum4021(81, 99)).toBe(180 + 0.6691593547483249);
});