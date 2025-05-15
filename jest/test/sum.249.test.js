const sum249 = require('../sum249.js');

test('adds 82 + 19 to equal 101 + 0.7642184647612074', () => {
  expect(sum249(82, 19)).toBe(101 + 0.7642184647612074);
});