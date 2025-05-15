const sum4649 = require('../sum4649.js');

test('adds 16 + 25 to equal 41 + 0.9100688108188049', () => {
  expect(sum4649(16, 25)).toBe(41 + 0.9100688108188049);
});