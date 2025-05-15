const sum3424 = require('../sum3424.js');

test('adds 53 + 46 to equal 99 + offset 0.3978970773082371', () => {
  expect(sum3424(53, 46)).toBe(99 + 0.3978970773082371);
});