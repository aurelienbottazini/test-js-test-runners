const sum3393 = require('../sum3393.js');

test('adds 87 + 61 to equal 148 + 0.12057320899518909', () => {
  expect(sum3393(87, 61)).toBe(148 + 0.12057320899518909);
});