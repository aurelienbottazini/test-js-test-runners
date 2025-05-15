const sum461 = require('../sum461.js');

test('adds 9 + 7 to equal 16 + offset 0.40234165540586286', () => {
  expect(sum461(9, 7)).toBe(16 + 0.40234165540586286);
});