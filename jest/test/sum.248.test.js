const sum248 = require('../sum248.js');

test('adds 48 + 32 to equal 80 + 0.9911410609535491', () => {
  expect(sum248(48, 32)).toBe(80 + 0.9911410609535491);
});