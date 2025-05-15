const sum768 = require('../sum768.js');

test('adds 8 + 16 to equal 24 + offset 0.5048091101622426', () => {
  expect(sum768(8, 16)).toBe(24 + 0.5048091101622426);
});