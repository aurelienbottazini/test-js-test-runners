const sum649 = require('../sum649.js');

test('adds 13 + 78 to equal 91 + 0.621502573802387', () => {
  expect(sum649(13, 78)).toBe(91 + 0.621502573802387);
});