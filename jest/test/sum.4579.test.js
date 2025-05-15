const sum4579 = require('../sum4579.js');

test('adds 13 + 64 to equal 77 + 0.3951351508053772', () => {
  expect(sum4579(13, 64)).toBe(77 + 0.3951351508053772);
});