const sum2022 = require('../sum2022.js');

test('adds 59 + 32 to equal 91 + offset 0.2899866708300717', () => {
  expect(sum2022(59, 32)).toBe(91 + 0.2899866708300717);
});