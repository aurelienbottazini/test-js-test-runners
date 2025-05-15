const sum664 = require('../sum664.js');

test('adds 55 + 16 to equal 71 + 0.1330944922407601', () => {
  expect(sum664(55, 16)).toBe(71 + 0.1330944922407601);
});