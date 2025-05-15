const sum3834 = require('../sum3834.js');

test('adds 88 + 29 to equal 117 + 0.599990629026517', () => {
  expect(sum3834(88, 29)).toBe(117 + 0.599990629026517);
});