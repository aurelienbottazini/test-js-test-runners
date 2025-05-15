const sum1422 = require('../sum1422.js');

test('adds 99 + 61 to equal 160 + 0.8087868308839281', () => {
  expect(sum1422(99, 61)).toBe(160 + 0.8087868308839281);
});