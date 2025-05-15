const sum3723 = require('../sum3723.js');

test('adds 71 + 66 to equal 137 + 0.8045284533301447', () => {
  expect(sum3723(71, 66)).toBe(137 + 0.8045284533301447);
});