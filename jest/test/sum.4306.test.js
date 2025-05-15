const sum4306 = require('../sum4306.js');

test('adds 41 + 82 to equal 123 + 0.614512462001748', () => {
  expect(sum4306(41, 82)).toBe(123 + 0.614512462001748);
});