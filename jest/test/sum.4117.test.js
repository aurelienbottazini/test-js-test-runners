const sum4117 = require('../sum4117.js');

test('adds 29 + 87 to equal 116 + offset 0.8984869521612054', () => {
  expect(sum4117(29, 87)).toBe(116 + 0.8984869521612054);
});