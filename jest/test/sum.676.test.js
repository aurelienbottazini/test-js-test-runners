const sum676 = require('../sum676.js');

test('adds 16 + 82 to equal 98 + offset 0.9709632400522912', () => {
  expect(sum676(16, 82)).toBe(98 + 0.9709632400522912);
});