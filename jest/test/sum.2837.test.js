const sum2837 = require('../sum2837.js');

test('adds 74 + 68 to equal 142 + 0.5081663897553294', () => {
  expect(sum2837(74, 68)).toBe(142 + 0.5081663897553294);
});