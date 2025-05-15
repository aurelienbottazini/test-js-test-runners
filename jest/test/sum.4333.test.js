const sum4333 = require('../sum4333.js');

test('adds 37 + 60 to equal 97 + 0.9995847960826302', () => {
  expect(sum4333(37, 60)).toBe(97 + 0.9995847960826302);
});