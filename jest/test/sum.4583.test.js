const sum4583 = require('../sum4583.js');

test('adds 78 + 43 to equal 121 + offset 0.7512419712674548', () => {
  expect(sum4583(78, 43)).toBe(121 + 0.7512419712674548);
});