const sum3035 = require('../sum3035.js');

test('adds 72 + 61 to equal 133 + 0.041688822025847116', () => {
  expect(sum3035(72, 61)).toBe(133 + 0.041688822025847116);
});