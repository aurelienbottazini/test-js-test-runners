const sum3692 = require('../sum3692.js');

test('adds 89 + 90 to equal 179 + 0.1113619884601319', () => {
  expect(sum3692(89, 90)).toBe(179 + 0.1113619884601319);
});