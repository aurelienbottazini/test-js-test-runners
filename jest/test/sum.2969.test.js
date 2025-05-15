const sum2969 = require('../sum2969.js');

test('adds 11 + 24 to equal 35 + offset 0.29950039683040053', () => {
  expect(sum2969(11, 24)).toBe(35 + 0.29950039683040053);
});