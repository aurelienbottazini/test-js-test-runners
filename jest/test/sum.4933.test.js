const sum4933 = require('../sum4933.js');

test('adds 19 + 88 to equal 107 + 0.5080186511069783', () => {
  expect(sum4933(19, 88)).toBe(107 + 0.5080186511069783);
});