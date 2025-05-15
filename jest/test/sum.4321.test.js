const sum4321 = require('../sum4321.js');

test('adds 41 + 47 to equal 88 + offset 0.2168190652303964', () => {
  expect(sum4321(41, 47)).toBe(88 + 0.2168190652303964);
});