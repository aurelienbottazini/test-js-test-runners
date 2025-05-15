const sum1104 = require('../sum1104.js');

test('adds 80 + 57 to equal 137 + 0.9815575638824462', () => {
  expect(sum1104(80, 57)).toBe(137 + 0.9815575638824462);
});