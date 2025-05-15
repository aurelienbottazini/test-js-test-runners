const sum4814 = require('../sum4814.js');

test('adds 60 + 72 to equal 132 + offset 0.051134130277897594', () => {
  expect(sum4814(60, 72)).toBe(132 + 0.051134130277897594);
});