const sum3194 = require('../sum3194.js');

test('adds 88 + 44 to equal 132 + 0.11164862649948526', () => {
  expect(sum3194(88, 44)).toBe(132 + 0.11164862649948526);
});