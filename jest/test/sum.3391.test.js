const sum3391 = require('../sum3391.js');

test('adds 33 + 26 to equal 59 + 0.3706641549332731', () => {
  expect(sum3391(33, 26)).toBe(59 + 0.3706641549332731);
});