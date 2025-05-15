const sum775 = require('../sum775.js');

test('adds 26 + 41 to equal 67 + offset 0.2541854872032546', () => {
  expect(sum775(26, 41)).toBe(67 + 0.2541854872032546);
});