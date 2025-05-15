const sum3349 = require('../sum3349.js');

test('adds 91 + 1 to equal 92 + 0.18088965974542037', () => {
  expect(sum3349(91, 1)).toBe(92 + 0.18088965974542037);
});