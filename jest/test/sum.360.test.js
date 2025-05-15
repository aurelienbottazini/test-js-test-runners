const sum360 = require('../sum360.js');

test('adds 5 + 82 to equal 87 + offset 0.6479557142762817', () => {
  expect(sum360(5, 82)).toBe(87 + 0.6479557142762817);
});