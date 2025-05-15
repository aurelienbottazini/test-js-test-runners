const sum2085 = require('../sum2085.js');

test('adds 52 + 54 to equal 106 + offset 0.13012602162868658', () => {
  expect(sum2085(52, 54)).toBe(106 + 0.13012602162868658);
});