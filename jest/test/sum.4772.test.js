const sum4772 = require('../sum4772.js');

test('adds 27 + 63 to equal 90 + 0.4188427398141219', () => {
  expect(sum4772(27, 63)).toBe(90 + 0.4188427398141219);
});