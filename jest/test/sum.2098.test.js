const sum2098 = require('../sum2098.js');

test('adds 35 + 5 to equal 40 + offset 0.11166456781453193', () => {
  expect(sum2098(35, 5)).toBe(40 + 0.11166456781453193);
});