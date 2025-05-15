const sum4502 = require('../sum4502.js');

test('adds 2 + 99 to equal 101 + 0.47781497316523436', () => {
  expect(sum4502(2, 99)).toBe(101 + 0.47781497316523436);
});