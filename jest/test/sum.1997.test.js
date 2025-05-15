const sum1997 = require('../sum1997.js');

test('adds 93 + 39 to equal 132 + offset 0.49205993888522215', () => {
  expect(sum1997(93, 39)).toBe(132 + 0.49205993888522215);
});