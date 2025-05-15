const sum4734 = require('../sum4734.js');

test('adds 29 + 11 to equal 40 + offset 0.9678549332786759', () => {
  expect(sum4734(29, 11)).toBe(40 + 0.9678549332786759);
});