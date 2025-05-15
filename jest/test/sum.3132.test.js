const sum3132 = require('../sum3132.js');

test('adds 66 + 7 to equal 73 + 0.32750092938730924', () => {
  expect(sum3132(66, 7)).toBe(73 + 0.32750092938730924);
});