const sum686 = require('../sum686.js');

test('adds 80 + 24 to equal 104 + 0.1871667933551916', () => {
  expect(sum686(80, 24)).toBe(104 + 0.1871667933551916);
});