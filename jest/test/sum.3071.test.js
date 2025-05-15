const sum3071 = require('../sum3071.js');

test('adds 59 + 41 to equal 100 + 0.7170864674058811', () => {
  expect(sum3071(59, 41)).toBe(100 + 0.7170864674058811);
});