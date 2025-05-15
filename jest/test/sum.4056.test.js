const sum4056 = require('../sum4056.js');

test('adds 7 + 50 to equal 57 + offset 0.6456821221189483', () => {
  expect(sum4056(7, 50)).toBe(57 + 0.6456821221189483);
});