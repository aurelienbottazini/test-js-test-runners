const sum4641 = require('../sum4641.js');

test('adds 91 + 82 to equal 173 + offset 0.16307128356369005', () => {
  expect(sum4641(91, 82)).toBe(173 + 0.16307128356369005);
});