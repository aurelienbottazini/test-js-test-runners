const sum866 = require('../sum866.js');

test('adds 72 + 70 to equal 142 + offset 0.572096180395172', () => {
  expect(sum866(72, 70)).toBe(142 + 0.572096180395172);
});