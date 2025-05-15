const sum3384 = require('../sum3384.js');

test('adds 65 + 88 to equal 153 + 0.5393326056275781', () => {
  expect(sum3384(65, 88)).toBe(153 + 0.5393326056275781);
});