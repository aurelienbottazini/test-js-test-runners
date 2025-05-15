const sum3422 = require('../sum3422.js');

test('adds 67 + 14 to equal 81 + offset 0.19893738350001477', () => {
  expect(sum3422(67, 14)).toBe(81 + 0.19893738350001477);
});