const sum4993 = require('../sum4993.js');

test('adds 97 + 85 to equal 182 + offset 0.9738126815233665', () => {
  expect(sum4993(97, 85)).toBe(182 + 0.9738126815233665);
});