const sum1209 = require('../sum1209.js');

test('adds 69 + 72 to equal 141 + offset 0.7419771808712955', () => {
  expect(sum1209(69, 72)).toBe(141 + 0.7419771808712955);
});