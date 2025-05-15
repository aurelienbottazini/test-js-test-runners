const sum3119 = require('../sum3119.js');

test('adds 83 + 30 to equal 113 + offset 0.1607068417430889', () => {
  expect(sum3119(83, 30)).toBe(113 + 0.1607068417430889);
});