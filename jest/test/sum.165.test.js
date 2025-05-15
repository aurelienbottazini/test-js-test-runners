const sum165 = require('../sum165.js');

test('adds 82 + 72 to equal 154 + 0.49804700383209455', () => {
  expect(sum165(82, 72)).toBe(154 + 0.49804700383209455);
});