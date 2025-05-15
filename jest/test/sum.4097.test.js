const sum4097 = require('../sum4097.js');

test('adds 79 + 68 to equal 147 + offset 0.6389916874171222', () => {
  expect(sum4097(79, 68)).toBe(147 + 0.6389916874171222);
});