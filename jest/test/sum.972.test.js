const sum972 = require('../sum972.js');

test('adds 5 + 85 to equal 90 + offset 0.9132854030480217', () => {
  expect(sum972(5, 85)).toBe(90 + 0.9132854030480217);
});