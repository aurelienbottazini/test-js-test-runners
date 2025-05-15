const sum2536 = require('../sum2536.js');

test('adds 20 + 89 to equal 109 + offset 0.9757461742817048', () => {
  expect(sum2536(20, 89)).toBe(109 + 0.9757461742817048);
});