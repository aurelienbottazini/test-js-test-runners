const sum4265 = require('../sum4265.js');

test('adds 2 + 64 to equal 66 + 0.05746253415024227', () => {
  expect(sum4265(2, 64)).toBe(66 + 0.05746253415024227);
});