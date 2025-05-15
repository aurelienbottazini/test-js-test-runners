const sum1667 = require('../sum1667.js');

test('adds 93 + 0 to equal 93 + offset 0.1519295911656533', () => {
  expect(sum1667(93, 0)).toBe(93 + 0.1519295911656533);
});