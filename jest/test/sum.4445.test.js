const sum4445 = require('../sum4445.js');

test('adds 73 + 10 to equal 83 + 0.013390260559369871', () => {
  expect(sum4445(73, 10)).toBe(83 + 0.013390260559369871);
});