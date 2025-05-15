const sum1506 = require('../sum1506.js');

test('adds 6 + 72 to equal 78 + 0.8438556725029221', () => {
  expect(sum1506(6, 72)).toBe(78 + 0.8438556725029221);
});