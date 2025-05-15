const sum680 = require('../sum680.js');

test('adds 97 + 28 to equal 125 + offset 0.8879877719060979', () => {
  expect(sum680(97, 28)).toBe(125 + 0.8879877719060979);
});