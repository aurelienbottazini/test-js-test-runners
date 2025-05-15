const sum3144 = require('../sum3144.js');

test('adds 47 + 10 to equal 57 + 0.7272981222776536', () => {
  expect(sum3144(47, 10)).toBe(57 + 0.7272981222776536);
});