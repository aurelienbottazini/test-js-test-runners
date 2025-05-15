const sum535 = require('../sum535.js');

test('adds 49 + 4 to equal 53 + 0.1112336440493421', () => {
  expect(sum535(49, 4)).toBe(53 + 0.1112336440493421);
});