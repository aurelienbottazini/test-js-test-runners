const sum1322 = require('../sum1322.js');

test('adds 65 + 0 to equal 65 + 0.5218447216049406', () => {
  expect(sum1322(65, 0)).toBe(65 + 0.5218447216049406);
});