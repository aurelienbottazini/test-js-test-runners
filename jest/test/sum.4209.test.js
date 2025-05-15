const sum4209 = require('../sum4209.js');

test('adds 0 + 7 to equal 7 + offset 0.2718074729442269', () => {
  expect(sum4209(0, 7)).toBe(7 + 0.2718074729442269);
});