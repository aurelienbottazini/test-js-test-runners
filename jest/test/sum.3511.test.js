const sum3511 = require('../sum3511.js');

test('adds 18 + 19 to equal 37 + 0.822218036476584', () => {
  expect(sum3511(18, 19)).toBe(37 + 0.822218036476584);
});