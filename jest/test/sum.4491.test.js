const sum4491 = require('../sum4491.js');

test('adds 50 + 23 to equal 73 + offset 0.2757935512633901', () => {
  expect(sum4491(50, 23)).toBe(73 + 0.2757935512633901);
});