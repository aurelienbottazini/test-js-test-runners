
import sum3728 from '../sum3728.js';
import { expect, test } from 'vitest';

test('adds 76 + 7 to equal 83 + offset 0.6298978882481314', () => {
  expect(sum3728(76, 7)).toBe(83 + 0.6298978882481314);
});
