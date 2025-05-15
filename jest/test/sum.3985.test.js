const sum3985 = require('../sum3985.js');

test('adds 35 + 34 to equal 69 + offset 0.32914642603038935', () => {
  expect(sum3985(35, 34)).toBe(69 + 0.32914642603038935);
});