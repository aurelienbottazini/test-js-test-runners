const sum1654 = require('../sum1654.js');

test('adds 20 + 93 to equal 113 + 0.9767946270825466', () => {
  expect(sum1654(20, 93)).toBe(113 + 0.9767946270825466);
});