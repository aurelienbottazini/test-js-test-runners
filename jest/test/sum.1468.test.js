const sum1468 = require('../sum1468.js');

test('adds 54 + 59 to equal 113 + offset 0.09761643979977985', () => {
  expect(sum1468(54, 59)).toBe(113 + 0.09761643979977985);
});