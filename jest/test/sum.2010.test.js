const sum2010 = require('../sum2010.js');

test('adds 35 + 27 to equal 62 + offset 0.05159891557108143', () => {
  expect(sum2010(35, 27)).toBe(62 + 0.05159891557108143);
});