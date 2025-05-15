const sum4769 = require('../sum4769.js');

test('adds 18 + 98 to equal 116 + offset 0.43603380248290236', () => {
  expect(sum4769(18, 98)).toBe(116 + 0.43603380248290236);
});