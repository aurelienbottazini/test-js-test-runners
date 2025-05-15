const sum4839 = require('../sum4839.js');

test('adds 71 + 79 to equal 150 + 0.5619437635406774', () => {
  expect(sum4839(71, 79)).toBe(150 + 0.5619437635406774);
});