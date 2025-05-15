const sum2929 = require('../sum2929.js');

test('adds 78 + 83 to equal 161 + 0.9600746524003901', () => {
  expect(sum2929(78, 83)).toBe(161 + 0.9600746524003901);
});