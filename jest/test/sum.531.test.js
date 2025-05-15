const sum531 = require('../sum531.js');

test('adds 74 + 77 to equal 151 + offset 0.16336671355828802', () => {
  expect(sum531(74, 77)).toBe(151 + 0.16336671355828802);
});