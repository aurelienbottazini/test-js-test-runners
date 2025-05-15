const sum2806 = require('../sum2806.js');

test('adds 94 + 4 to equal 98 + offset 0.08684860758203838', () => {
  expect(sum2806(94, 4)).toBe(98 + 0.08684860758203838);
});