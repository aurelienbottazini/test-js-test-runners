const sum1210 = require('../sum1210.js');

test('adds 85 + 27 to equal 112 + offset 0.7667726691591178', () => {
  expect(sum1210(85, 27)).toBe(112 + 0.7667726691591178);
});