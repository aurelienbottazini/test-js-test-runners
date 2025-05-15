const sum1779 = require('../sum1779.js');

test('adds 15 + 70 to equal 85 + 0.5670818138065482', () => {
  expect(sum1779(15, 70)).toBe(85 + 0.5670818138065482);
});