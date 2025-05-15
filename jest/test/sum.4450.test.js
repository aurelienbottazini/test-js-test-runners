const sum4450 = require('../sum4450.js');

test('adds 77 + 51 to equal 128 + 0.05730560955772823', () => {
  expect(sum4450(77, 51)).toBe(128 + 0.05730560955772823);
});