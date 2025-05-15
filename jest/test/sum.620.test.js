const sum620 = require('../sum620.js');

test('adds 94 + 61 to equal 155 + offset 0.8292534027724546', () => {
  expect(sum620(94, 61)).toBe(155 + 0.8292534027724546);
});