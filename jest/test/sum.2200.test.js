const sum2200 = require('../sum2200.js');

test('adds 89 + 64 to equal 153 + 0.9496020911392292', () => {
  expect(sum2200(89, 64)).toBe(153 + 0.9496020911392292);
});