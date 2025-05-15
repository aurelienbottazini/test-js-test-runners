const sum891 = require('../sum891.js');

test('adds 19 + 17 to equal 36 + offset 0.7630531614218631', () => {
  expect(sum891(19, 17)).toBe(36 + 0.7630531614218631);
});