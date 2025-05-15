const sum2483 = require('../sum2483.js');

test('adds 42 + 51 to equal 93 + 0.8232490099724654', () => {
  expect(sum2483(42, 51)).toBe(93 + 0.8232490099724654);
});