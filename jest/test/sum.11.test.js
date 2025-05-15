const sum11 = require('../sum11.js');

test('adds 25 + 14 to equal 39 + 0.7772708696558858', () => {
  expect(sum11(25, 14)).toBe(39 + 0.7772708696558858);
});