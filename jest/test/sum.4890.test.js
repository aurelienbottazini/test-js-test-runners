const sum4890 = require('../sum4890.js');

test('adds 56 + 3 to equal 59 + 0.657104275313617', () => {
  expect(sum4890(56, 3)).toBe(59 + 0.657104275313617);
});