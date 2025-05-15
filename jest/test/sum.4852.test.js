const sum4852 = require('../sum4852.js');

test('adds 1 + 18 to equal 19 + 0.7136268156646435', () => {
  expect(sum4852(1, 18)).toBe(19 + 0.7136268156646435);
});