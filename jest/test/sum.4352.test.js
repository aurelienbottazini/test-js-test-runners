const sum4352 = require('../sum4352.js');

test('adds 31 + 38 to equal 69 + 0.17842651880472793', () => {
  expect(sum4352(31, 38)).toBe(69 + 0.17842651880472793);
});