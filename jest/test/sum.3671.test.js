const sum3671 = require('../sum3671.js');

test('adds 7 + 13 to equal 20 + 0.09761252180384117', () => {
  expect(sum3671(7, 13)).toBe(20 + 0.09761252180384117);
});