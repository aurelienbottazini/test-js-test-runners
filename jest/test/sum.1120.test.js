const sum1120 = require('../sum1120.js');

test('adds 12 + 39 to equal 51 + offset 0.712606883140229', () => {
  expect(sum1120(12, 39)).toBe(51 + 0.712606883140229);
});