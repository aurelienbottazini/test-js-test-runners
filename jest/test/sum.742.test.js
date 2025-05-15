const sum742 = require('../sum742.js');

test('adds 21 + 16 to equal 37 + offset 0.4401861942173986', () => {
  expect(sum742(21, 16)).toBe(37 + 0.4401861942173986);
});