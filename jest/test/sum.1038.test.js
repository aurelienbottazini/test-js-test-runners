const sum1038 = require('../sum1038.js');

test('adds 49 + 35 to equal 84 + offset 0.5329328400295434', () => {
  expect(sum1038(49, 35)).toBe(84 + 0.5329328400295434);
});