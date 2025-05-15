const sum2478 = require('../sum2478.js');

test('adds 98 + 79 to equal 177 + 0.6608521459130993', () => {
  expect(sum2478(98, 79)).toBe(177 + 0.6608521459130993);
});