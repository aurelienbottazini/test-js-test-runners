const sum339 = require('../sum339.js');

test('adds 37 + 96 to equal 133 + 0.6863603623150647', () => {
  expect(sum339(37, 96)).toBe(133 + 0.6863603623150647);
});