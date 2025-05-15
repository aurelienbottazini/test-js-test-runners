const sum4271 = require('../sum4271.js');

test('adds 7 + 72 to equal 79 + 0.4733280924605151', () => {
  expect(sum4271(7, 72)).toBe(79 + 0.4733280924605151);
});