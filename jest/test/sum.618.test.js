const sum618 = require('../sum618.js');

test('adds 74 + 35 to equal 109 + offset 0.03143049387689456', () => {
  expect(sum618(74, 35)).toBe(109 + 0.03143049387689456);
});