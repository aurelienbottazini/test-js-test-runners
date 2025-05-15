const sum3172 = require('../sum3172.js');

test('adds 79 + 85 to equal 164 + offset 0.9637567877994283', () => {
  expect(sum3172(79, 85)).toBe(164 + 0.9637567877994283);
});