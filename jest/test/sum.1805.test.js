const sum1805 = require('../sum1805.js');

test('adds 19 + 81 to equal 100 + offset 0.20366988572530353', () => {
  expect(sum1805(19, 81)).toBe(100 + 0.20366988572530353);
});