const sum3056 = require('../sum3056.js');

test('adds 94 + 85 to equal 179 + offset 0.4333743190090561', () => {
  expect(sum3056(94, 85)).toBe(179 + 0.4333743190090561);
});