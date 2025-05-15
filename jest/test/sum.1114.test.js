const sum1114 = require('../sum1114.js');

test('adds 9 + 20 to equal 29 + offset 0.3577195998693342', () => {
  expect(sum1114(9, 20)).toBe(29 + 0.3577195998693342);
});