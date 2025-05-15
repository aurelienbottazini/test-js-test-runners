const sum1804 = require('../sum1804.js');

test('adds 69 + 68 to equal 137 + offset 0.3257021071236855', () => {
  expect(sum1804(69, 68)).toBe(137 + 0.3257021071236855);
});