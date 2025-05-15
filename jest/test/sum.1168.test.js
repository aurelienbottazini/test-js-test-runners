const sum1168 = require('../sum1168.js');

test('adds 44 + 88 to equal 132 + offset 0.5326335543295795', () => {
  expect(sum1168(44, 88)).toBe(132 + 0.5326335543295795);
});