const sum1874 = require('../sum1874.js');

test('adds 10 + 77 to equal 87 + 0.7974602072438908', () => {
  expect(sum1874(10, 77)).toBe(87 + 0.7974602072438908);
});