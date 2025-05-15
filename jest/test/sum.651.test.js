const sum651 = require('../sum651.js');

test('adds 50 + 82 to equal 132 + offset 0.9494398399378995', () => {
  expect(sum651(50, 82)).toBe(132 + 0.9494398399378995);
});