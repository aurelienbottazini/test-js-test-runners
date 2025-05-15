const sum1673 = require('../sum1673.js');

test('adds 78 + 27 to equal 105 + offset 0.5248155637666042', () => {
  expect(sum1673(78, 27)).toBe(105 + 0.5248155637666042);
});