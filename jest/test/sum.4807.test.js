const sum4807 = require('../sum4807.js');

test('adds 37 + 18 to equal 55 + offset 0.1552903988266081', () => {
  expect(sum4807(37, 18)).toBe(55 + 0.1552903988266081);
});