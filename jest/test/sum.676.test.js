const sum676 = require('../sum676.js');

test('adds 18 + 96 to equal 114 + 0.04120586207889898', () => {
  expect(sum676(18, 96)).toBe(114 + 0.04120586207889898);
});