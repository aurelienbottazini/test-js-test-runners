const sum671 = require('../sum671.js');

test('adds 29 + 81 to equal 110 + 0.8260683184768038', () => {
  expect(sum671(29, 81)).toBe(110 + 0.8260683184768038);
});