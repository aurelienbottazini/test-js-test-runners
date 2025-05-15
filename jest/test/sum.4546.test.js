const sum4546 = require('../sum4546.js');

test('adds 10 + 12 to equal 22 + offset 0.1739647489706312', () => {
  expect(sum4546(10, 12)).toBe(22 + 0.1739647489706312);
});