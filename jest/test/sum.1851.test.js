const sum1851 = require('../sum1851.js');

test('adds 4 + 80 to equal 84 + 0.9320221148217156', () => {
  expect(sum1851(4, 80)).toBe(84 + 0.9320221148217156);
});