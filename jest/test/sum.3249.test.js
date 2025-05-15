const sum3249 = require('../sum3249.js');

test('adds 41 + 4 to equal 45 + offset 0.90367895665018', () => {
  expect(sum3249(41, 4)).toBe(45 + 0.90367895665018);
});