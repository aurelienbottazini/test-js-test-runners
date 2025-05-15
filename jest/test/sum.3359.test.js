const sum3359 = require('../sum3359.js');

test('adds 36 + 68 to equal 104 + offset 0.22442445664672783', () => {
  expect(sum3359(36, 68)).toBe(104 + 0.22442445664672783);
});