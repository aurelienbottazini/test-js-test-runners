const sum4404 = require('../sum4404.js');

test('adds 82 + 13 to equal 95 + offset 0.1777510482450002', () => {
  expect(sum4404(82, 13)).toBe(95 + 0.1777510482450002);
});