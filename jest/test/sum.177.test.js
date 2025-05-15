const sum177 = require('../sum177.js');

test('adds 79 + 34 to equal 113 + offset 0.9454308007727897', () => {
  expect(sum177(79, 34)).toBe(113 + 0.9454308007727897);
});