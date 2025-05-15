const sum3760 = require('../sum3760.js');

test('adds 2 + 13 to equal 15 + offset 0.15175461778961985', () => {
  expect(sum3760(2, 13)).toBe(15 + 0.15175461778961985);
});