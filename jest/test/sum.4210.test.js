const sum4210 = require('../sum4210.js');

test('adds 24 + 80 to equal 104 + offset 0.6373645448307337', () => {
  expect(sum4210(24, 80)).toBe(104 + 0.6373645448307337);
});