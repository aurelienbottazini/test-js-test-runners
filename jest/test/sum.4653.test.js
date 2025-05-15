const sum4653 = require('../sum4653.js');

test('adds 44 + 62 to equal 106 + offset 0.8016055987336592', () => {
  expect(sum4653(44, 62)).toBe(106 + 0.8016055987336592);
});