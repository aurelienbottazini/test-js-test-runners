const sum4564 = require('../sum4564.js');

test('adds 90 + 85 to equal 175 + offset 0.7277409443071056', () => {
  expect(sum4564(90, 85)).toBe(175 + 0.7277409443071056);
});