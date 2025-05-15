const sum4616 = require('../sum4616.js');

test('adds 70 + 18 to equal 88 + offset 0.44313620554780186', () => {
  expect(sum4616(70, 18)).toBe(88 + 0.44313620554780186);
});