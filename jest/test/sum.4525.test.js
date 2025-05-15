const sum4525 = require('../sum4525.js');

test('adds 55 + 13 to equal 68 + 0.796090889655072', () => {
  expect(sum4525(55, 13)).toBe(68 + 0.796090889655072);
});