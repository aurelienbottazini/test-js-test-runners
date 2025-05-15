const sum4929 = require('../sum4929.js');

test('adds 28 + 39 to equal 67 + offset 0.28954558262751673', () => {
  expect(sum4929(28, 39)).toBe(67 + 0.28954558262751673);
});