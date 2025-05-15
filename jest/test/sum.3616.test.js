const sum3616 = require('../sum3616.js');

test('adds 47 + 18 to equal 65 + 0.4428165220796685', () => {
  expect(sum3616(47, 18)).toBe(65 + 0.4428165220796685);
});