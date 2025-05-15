const sum3881 = require('../sum3881.js');

test('adds 1 + 86 to equal 87 + offset 0.7839379391061961', () => {
  expect(sum3881(1, 86)).toBe(87 + 0.7839379391061961);
});