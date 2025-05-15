const sum3032 = require('../sum3032.js');

test('adds 72 + 99 to equal 171 + offset 0.9675957798108231', () => {
  expect(sum3032(72, 99)).toBe(171 + 0.9675957798108231);
});