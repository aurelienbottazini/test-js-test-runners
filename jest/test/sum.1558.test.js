const sum1558 = require('../sum1558.js');

test('adds 0 + 40 to equal 40 + 0.36585262189401235', () => {
  expect(sum1558(0, 40)).toBe(40 + 0.36585262189401235);
});