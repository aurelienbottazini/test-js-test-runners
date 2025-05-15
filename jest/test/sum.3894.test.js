const sum3894 = require('../sum3894.js');

test('adds 79 + 4 to equal 83 + 0.495525091194817', () => {
  expect(sum3894(79, 4)).toBe(83 + 0.495525091194817);
});