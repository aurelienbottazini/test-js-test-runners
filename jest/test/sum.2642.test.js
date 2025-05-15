const sum2642 = require('../sum2642.js');

test('adds 10 + 90 to equal 100 + 0.3657066382219787', () => {
  expect(sum2642(10, 90)).toBe(100 + 0.3657066382219787);
});