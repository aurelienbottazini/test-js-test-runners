const sum2419 = require('../sum2419.js');

test('adds 14 + 60 to equal 74 + offset 0.3817021685244645', () => {
  expect(sum2419(14, 60)).toBe(74 + 0.3817021685244645);
});