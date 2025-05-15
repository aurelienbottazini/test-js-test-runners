const sum2489 = require('../sum2489.js');

test('adds 29 + 28 to equal 57 + 0.6185469175846675', () => {
  expect(sum2489(29, 28)).toBe(57 + 0.6185469175846675);
});