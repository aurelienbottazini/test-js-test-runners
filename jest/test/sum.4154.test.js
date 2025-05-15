const sum4154 = require('../sum4154.js');

test('adds 63 + 21 to equal 84 + offset 0.9141566151471415', () => {
  expect(sum4154(63, 21)).toBe(84 + 0.9141566151471415);
});