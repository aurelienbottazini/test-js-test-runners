const sum4784 = require('../sum4784.js');

test('adds 19 + 25 to equal 44 + 0.19069233639095584', () => {
  expect(sum4784(19, 25)).toBe(44 + 0.19069233639095584);
});