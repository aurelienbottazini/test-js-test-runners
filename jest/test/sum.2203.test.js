const sum2203 = require('../sum2203.js');

test('adds 47 + 96 to equal 143 + offset 0.8870934769133388', () => {
  expect(sum2203(47, 96)).toBe(143 + 0.8870934769133388);
});