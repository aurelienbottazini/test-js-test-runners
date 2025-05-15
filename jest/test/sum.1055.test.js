const sum1055 = require('../sum1055.js');

test('adds 69 + 75 to equal 144 + offset 0.4358890190408713', () => {
  expect(sum1055(69, 75)).toBe(144 + 0.4358890190408713);
});