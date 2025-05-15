const sum4067 = require('../sum4067.js');

test('adds 52 + 7 to equal 59 + 0.8928815652513451', () => {
  expect(sum4067(52, 7)).toBe(59 + 0.8928815652513451);
});