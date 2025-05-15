const sum4806 = require('../sum4806.js');

test('adds 2 + 84 to equal 86 + 0.4399290836895773', () => {
  expect(sum4806(2, 84)).toBe(86 + 0.4399290836895773);
});