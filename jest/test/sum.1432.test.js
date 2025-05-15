const sum1432 = require('../sum1432.js');

test('adds 84 + 79 to equal 163 + 0.8872363531661892', () => {
  expect(sum1432(84, 79)).toBe(163 + 0.8872363531661892);
});