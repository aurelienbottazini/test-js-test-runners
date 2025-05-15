const sum2003 = require('../sum2003.js');

test('adds 61 + 61 to equal 122 + offset 0.9246600775733026', () => {
  expect(sum2003(61, 61)).toBe(122 + 0.9246600775733026);
});