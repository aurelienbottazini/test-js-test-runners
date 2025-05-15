const sum459 = require('../sum459.js');

test('adds 78 + 84 to equal 162 + 0.23008181404718775', () => {
  expect(sum459(78, 84)).toBe(162 + 0.23008181404718775);
});