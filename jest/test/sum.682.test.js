const sum682 = require('../sum682.js');

test('adds 20 + 7 to equal 27 + offset 0.8148696636582469', () => {
  expect(sum682(20, 7)).toBe(27 + 0.8148696636582469);
});