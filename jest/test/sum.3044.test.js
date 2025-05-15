const sum3044 = require('../sum3044.js');

test('adds 79 + 7 to equal 86 + 0.569754040951368', () => {
  expect(sum3044(79, 7)).toBe(86 + 0.569754040951368);
});