const sum4003 = require('../sum4003.js');

test('adds 42 + 97 to equal 139 + 0.23668511691812955', () => {
  expect(sum4003(42, 97)).toBe(139 + 0.23668511691812955);
});