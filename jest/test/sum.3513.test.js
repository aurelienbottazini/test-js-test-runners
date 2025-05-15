const sum3513 = require('../sum3513.js');

test('adds 73 + 81 to equal 154 + 0.5579315287456131', () => {
  expect(sum3513(73, 81)).toBe(154 + 0.5579315287456131);
});