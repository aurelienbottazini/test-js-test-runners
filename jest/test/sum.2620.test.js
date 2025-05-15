const sum2620 = require('../sum2620.js');

test('adds 85 + 34 to equal 119 + offset 0.19901093810133785', () => {
  expect(sum2620(85, 34)).toBe(119 + 0.19901093810133785);
});