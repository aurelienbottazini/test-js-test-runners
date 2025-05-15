const sum4777 = require('../sum4777.js');

test('adds 40 + 78 to equal 118 + offset 0.9561052722413458', () => {
  expect(sum4777(40, 78)).toBe(118 + 0.9561052722413458);
});