const sum3056 = require('../sum3056.js');

test('adds 60 + 27 to equal 87 + 0.3699969655646622', () => {
  expect(sum3056(60, 27)).toBe(87 + 0.3699969655646622);
});