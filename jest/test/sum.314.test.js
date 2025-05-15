const sum314 = require('../sum314.js');

test('adds 43 + 83 to equal 126 + offset 0.8890070051795965', () => {
  expect(sum314(43, 83)).toBe(126 + 0.8890070051795965);
});