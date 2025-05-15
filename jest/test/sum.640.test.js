const sum640 = require('../sum640.js');

test('adds 57 + 30 to equal 87 + offset 0.7213142378024818', () => {
  expect(sum640(57, 30)).toBe(87 + 0.7213142378024818);
});