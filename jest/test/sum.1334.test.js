const sum1334 = require('../sum1334.js');

test('adds 30 + 67 to equal 97 + 0.31755574900176076', () => {
  expect(sum1334(30, 67)).toBe(97 + 0.31755574900176076);
});