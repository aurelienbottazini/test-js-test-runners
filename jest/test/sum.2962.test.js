const sum2962 = require('../sum2962.js');

test('adds 86 + 78 to equal 164 + offset 0.7254976836171271', () => {
  expect(sum2962(86, 78)).toBe(164 + 0.7254976836171271);
});