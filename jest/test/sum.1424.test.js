const sum1424 = require('../sum1424.js');

test('adds 53 + 69 to equal 122 + 0.4344480442895302', () => {
  expect(sum1424(53, 69)).toBe(122 + 0.4344480442895302);
});