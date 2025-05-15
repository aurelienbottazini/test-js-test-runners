const sum1784 = require('../sum1784.js');

test('adds 61 + 60 to equal 121 + 0.24947562531782908', () => {
  expect(sum1784(61, 60)).toBe(121 + 0.24947562531782908);
});