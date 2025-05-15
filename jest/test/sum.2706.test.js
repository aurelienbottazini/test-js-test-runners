const sum2706 = require('../sum2706.js');

test('adds 65 + 88 to equal 153 + offset 0.5919062884445706', () => {
  expect(sum2706(65, 88)).toBe(153 + 0.5919062884445706);
});