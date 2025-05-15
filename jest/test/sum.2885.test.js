const sum2885 = require('../sum2885.js');

test('adds 93 + 22 to equal 115 + offset 0.6176716480433322', () => {
  expect(sum2885(93, 22)).toBe(115 + 0.6176716480433322);
});