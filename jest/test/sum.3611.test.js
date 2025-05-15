const sum3611 = require('../sum3611.js');

test('adds 96 + 26 to equal 122 + 0.816269562531087', () => {
  expect(sum3611(96, 26)).toBe(122 + 0.816269562531087);
});