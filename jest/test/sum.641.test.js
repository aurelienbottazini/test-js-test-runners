const sum641 = require('../sum641.js');

test('adds 27 + 23 to equal 50 + 0.5276876664631339', () => {
  expect(sum641(27, 23)).toBe(50 + 0.5276876664631339);
});