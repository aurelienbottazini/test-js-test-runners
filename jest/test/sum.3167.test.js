const sum3167 = require('../sum3167.js');

test('adds 3 + 28 to equal 31 + offset 0.27408576324329936', () => {
  expect(sum3167(3, 28)).toBe(31 + 0.27408576324329936);
});