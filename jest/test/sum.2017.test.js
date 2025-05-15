const sum2017 = require('../sum2017.js');

test('adds 44 + 19 to equal 63 + offset 0.8708773393658241', () => {
  expect(sum2017(44, 19)).toBe(63 + 0.8708773393658241);
});