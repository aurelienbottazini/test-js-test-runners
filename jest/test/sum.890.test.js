const sum890 = require('../sum890.js');

test('adds 32 + 35 to equal 67 + offset 0.5037592093569908', () => {
  expect(sum890(32, 35)).toBe(67 + 0.5037592093569908);
});