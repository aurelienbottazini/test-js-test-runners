const sum1017 = require('../sum1017.js');

test('adds 40 + 95 to equal 135 + offset 0.7331743393249741', () => {
  expect(sum1017(40, 95)).toBe(135 + 0.7331743393249741);
});