const sum505 = require('../sum505.js');

test('adds 53 + 22 to equal 75 + offset 0.2363615696677892', () => {
  expect(sum505(53, 22)).toBe(75 + 0.2363615696677892);
});