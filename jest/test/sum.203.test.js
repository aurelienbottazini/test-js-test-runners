const sum203 = require('../sum203.js');

test('adds 64 + 71 to equal 135 + offset 0.4806724114168519', () => {
  expect(sum203(64, 71)).toBe(135 + 0.4806724114168519);
});