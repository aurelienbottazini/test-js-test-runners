const sum4860 = require('../sum4860.js');

test('adds 80 + 60 to equal 140 + offset 0.46538843288730747', () => {
  expect(sum4860(80, 60)).toBe(140 + 0.46538843288730747);
});