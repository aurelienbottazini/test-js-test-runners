const sum182 = require('../sum182.js');

test('adds 65 + 20 to equal 85 + offset 0.9667575824205032', () => {
  expect(sum182(65, 20)).toBe(85 + 0.9667575824205032);
});