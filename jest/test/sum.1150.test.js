const sum1150 = require('../sum1150.js');

test('adds 14 + 61 to equal 75 + 0.7805145378531927', () => {
  expect(sum1150(14, 61)).toBe(75 + 0.7805145378531927);
});