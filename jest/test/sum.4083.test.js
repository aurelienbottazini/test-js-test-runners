const sum4083 = require('../sum4083.js');

test('adds 62 + 7 to equal 69 + 0.2385418078730953', () => {
  expect(sum4083(62, 7)).toBe(69 + 0.2385418078730953);
});