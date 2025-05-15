const sum4070 = require('../sum4070.js');

test('adds 82 + 40 to equal 122 + offset 0.12912101793676956', () => {
  expect(sum4070(82, 40)).toBe(122 + 0.12912101793676956);
});