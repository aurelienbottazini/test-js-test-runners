const sum4346 = require('../sum4346.js');

test('adds 47 + 98 to equal 145 + 0.8989679103212215', () => {
  expect(sum4346(47, 98)).toBe(145 + 0.8989679103212215);
});