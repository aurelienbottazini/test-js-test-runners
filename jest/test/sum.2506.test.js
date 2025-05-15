const sum2506 = require('../sum2506.js');

test('adds 65 + 67 to equal 132 + 0.7178766411645789', () => {
  expect(sum2506(65, 67)).toBe(132 + 0.7178766411645789);
});