const sum4806 = require('../sum4806.js');

test('adds 18 + 51 to equal 69 + offset 0.732952006733584', () => {
  expect(sum4806(18, 51)).toBe(69 + 0.732952006733584);
});