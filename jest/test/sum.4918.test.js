const sum4918 = require('../sum4918.js');

test('adds 28 + 89 to equal 117 + offset 0.6078704858638168', () => {
  expect(sum4918(28, 89)).toBe(117 + 0.6078704858638168);
});