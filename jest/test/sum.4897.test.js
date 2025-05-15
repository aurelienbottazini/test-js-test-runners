const sum4897 = require('../sum4897.js');

test('adds 96 + 86 to equal 182 + offset 0.32800835043897825', () => {
  expect(sum4897(96, 86)).toBe(182 + 0.32800835043897825);
});