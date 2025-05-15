const sum4086 = require('../sum4086.js');

test('adds 64 + 65 to equal 129 + 0.3068214963257002', () => {
  expect(sum4086(64, 65)).toBe(129 + 0.3068214963257002);
});