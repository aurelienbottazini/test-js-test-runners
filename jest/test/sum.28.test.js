const sum28 = require('../sum28.js');

test('adds 28 + 32 to equal 60 + 0.4762154130463443', () => {
  expect(sum28(28, 32)).toBe(60 + 0.4762154130463443);
});