const sum2587 = require('../sum2587.js');

test('adds 73 + 57 to equal 130 + 0.05813981918751021', () => {
  expect(sum2587(73, 57)).toBe(130 + 0.05813981918751021);
});