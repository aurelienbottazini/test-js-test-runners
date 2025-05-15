const sum873 = require('../sum873.js');

test('adds 17 + 28 to equal 45 + 0.02034740445512284', () => {
  expect(sum873(17, 28)).toBe(45 + 0.02034740445512284);
});