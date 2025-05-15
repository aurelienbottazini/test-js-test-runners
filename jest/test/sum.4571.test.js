const sum4571 = require('../sum4571.js');

test('adds 78 + 13 to equal 91 + offset 0.6908674650071026', () => {
  expect(sum4571(78, 13)).toBe(91 + 0.6908674650071026);
});