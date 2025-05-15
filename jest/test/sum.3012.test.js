const sum3012 = require('../sum3012.js');

test('adds 34 + 78 to equal 112 + offset 0.8074210136029951', () => {
  expect(sum3012(34, 78)).toBe(112 + 0.8074210136029951);
});