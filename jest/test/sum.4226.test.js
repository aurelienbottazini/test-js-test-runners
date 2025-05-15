const sum4226 = require('../sum4226.js');

test('adds 67 + 17 to equal 84 + offset 0.6365033555467159', () => {
  expect(sum4226(67, 17)).toBe(84 + 0.6365033555467159);
});