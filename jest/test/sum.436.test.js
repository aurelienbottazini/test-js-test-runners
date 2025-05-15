const sum436 = require('../sum436.js');

test('adds 66 + 61 to equal 127 + 0.10807134912165217', () => {
  expect(sum436(66, 61)).toBe(127 + 0.10807134912165217);
});