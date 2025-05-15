const sum2117 = require('../sum2117.js');

test('adds 45 + 89 to equal 134 + 0.28410337773197347', () => {
  expect(sum2117(45, 89)).toBe(134 + 0.28410337773197347);
});