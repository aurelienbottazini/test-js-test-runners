const sum4630 = require('../sum4630.js');

test('adds 28 + 22 to equal 50 + offset 0.688224172818638', () => {
  expect(sum4630(28, 22)).toBe(50 + 0.688224172818638);
});