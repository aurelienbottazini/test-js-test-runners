const sum1250 = require('../sum1250.js');

test('adds 1 + 36 to equal 37 + 0.6795610126056669', () => {
  expect(sum1250(1, 36)).toBe(37 + 0.6795610126056669);
});