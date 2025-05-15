const sum2880 = require('../sum2880.js');

test('adds 0 + 18 to equal 18 + 0.9874684600708624', () => {
  expect(sum2880(0, 18)).toBe(18 + 0.9874684600708624);
});