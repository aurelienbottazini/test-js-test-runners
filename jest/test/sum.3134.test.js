const sum3134 = require('../sum3134.js');

test('adds 18 + 21 to equal 39 + 0.5247907183411112', () => {
  expect(sum3134(18, 21)).toBe(39 + 0.5247907183411112);
});