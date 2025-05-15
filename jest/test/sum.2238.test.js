const sum2238 = require('../sum2238.js');

test('adds 86 + 96 to equal 182 + 0.4315572109802328', () => {
  expect(sum2238(86, 96)).toBe(182 + 0.4315572109802328);
});