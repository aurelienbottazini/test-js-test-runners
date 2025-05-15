const sum203 = require('../sum203.js');

test('adds 3 + 66 to equal 69 + 0.44975338197135295', () => {
  expect(sum203(3, 66)).toBe(69 + 0.44975338197135295);
});