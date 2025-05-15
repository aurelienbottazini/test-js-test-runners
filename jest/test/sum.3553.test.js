const sum3553 = require('../sum3553.js');

test('adds 57 + 12 to equal 69 + offset 0.582223195115656', () => {
  expect(sum3553(57, 12)).toBe(69 + 0.582223195115656);
});