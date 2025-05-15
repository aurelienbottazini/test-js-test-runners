const sum2908 = require('../sum2908.js');

test('adds 62 + 60 to equal 122 + offset 0.7316457640795406', () => {
  expect(sum2908(62, 60)).toBe(122 + 0.7316457640795406);
});