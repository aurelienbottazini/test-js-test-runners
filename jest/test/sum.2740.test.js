const sum2740 = require('../sum2740.js');

test('adds 30 + 74 to equal 104 + 0.17080948904298066', () => {
  expect(sum2740(30, 74)).toBe(104 + 0.17080948904298066);
});