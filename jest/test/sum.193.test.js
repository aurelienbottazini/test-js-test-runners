const sum193 = require('../sum193.js');

test('adds 6 + 84 to equal 90 + 0.10648951507385274', () => {
  expect(sum193(6, 84)).toBe(90 + 0.10648951507385274);
});