const sum4798 = require('../sum4798.js');

test('adds 73 + 66 to equal 139 + offset 0.7047482299418707', () => {
  expect(sum4798(73, 66)).toBe(139 + 0.7047482299418707);
});