const sum4068 = require('../sum4068.js');

test('adds 30 + 56 to equal 86 + offset 0.05643532453612787', () => {
  expect(sum4068(30, 56)).toBe(86 + 0.05643532453612787);
});