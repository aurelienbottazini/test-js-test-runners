const sum3281 = require('../sum3281.js');

test('adds 66 + 16 to equal 82 + offset 0.17860313424718155', () => {
  expect(sum3281(66, 16)).toBe(82 + 0.17860313424718155);
});