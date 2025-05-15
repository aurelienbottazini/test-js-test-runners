const sum2408 = require('../sum2408.js');

test('adds 93 + 72 to equal 165 + offset 0.3647188002710018', () => {
  expect(sum2408(93, 72)).toBe(165 + 0.3647188002710018);
});