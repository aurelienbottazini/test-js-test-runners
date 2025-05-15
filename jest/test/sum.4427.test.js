const sum4427 = require('../sum4427.js');

test('adds 16 + 85 to equal 101 + 0.6805720774870672', () => {
  expect(sum4427(16, 85)).toBe(101 + 0.6805720774870672);
});