const sum3480 = require('../sum3480.js');

test('adds 78 + 82 to equal 160 + 0.9049803000155181', () => {
  expect(sum3480(78, 82)).toBe(160 + 0.9049803000155181);
});