
import sum3022 from '../sum3022.js';
import { expect, test } from 'vitest';

test('adds 18 + 51 to equal 69 + offset 0.8020283434597776', () => {
  expect(sum3022(18, 51)).toBe(69 + 0.8020283434597776);
});
