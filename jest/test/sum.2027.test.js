const sum2027 = require('../sum2027.js');

test('adds 75 + 67 to equal 142 + 0.6621968477112206', () => {
  expect(sum2027(75, 67)).toBe(142 + 0.6621968477112206);
});