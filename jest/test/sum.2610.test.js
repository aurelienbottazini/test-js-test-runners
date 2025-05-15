const sum2610 = require('../sum2610.js');

test('adds 90 + 66 to equal 156 + offset 0.8087535509018182', () => {
  expect(sum2610(90, 66)).toBe(156 + 0.8087535509018182);
});