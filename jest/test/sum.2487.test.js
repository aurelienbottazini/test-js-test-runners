const sum2487 = require('../sum2487.js');

test('adds 36 + 14 to equal 50 + 0.9292121628240457', () => {
  expect(sum2487(36, 14)).toBe(50 + 0.9292121628240457);
});