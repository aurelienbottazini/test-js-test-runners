const sum603 = require('../sum603.js');

test('adds 86 + 79 to equal 165 + offset 0.6169561786337652', () => {
  expect(sum603(86, 79)).toBe(165 + 0.6169561786337652);
});