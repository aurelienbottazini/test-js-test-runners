const sum4884 = require('../sum4884.js');

test('adds 28 + 7 to equal 35 + offset 0.7250708207985808', () => {
  expect(sum4884(28, 7)).toBe(35 + 0.7250708207985808);
});