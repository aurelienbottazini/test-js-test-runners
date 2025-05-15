const sum556 = require('../sum556.js');

test('adds 91 + 86 to equal 177 + 0.9065003242895345', () => {
  expect(sum556(91, 86)).toBe(177 + 0.9065003242895345);
});