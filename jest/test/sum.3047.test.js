const sum3047 = require('../sum3047.js');

test('adds 52 + 77 to equal 129 + 0.5513860949253145', () => {
  expect(sum3047(52, 77)).toBe(129 + 0.5513860949253145);
});