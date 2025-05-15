const sum1846 = require('../sum1846.js');

test('adds 57 + 15 to equal 72 + 0.2806613440310376', () => {
  expect(sum1846(57, 15)).toBe(72 + 0.2806613440310376);
});