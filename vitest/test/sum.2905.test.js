
import sum2905 from '../sum2905.js';
import { expect, test } from 'vitest';

test('adds 32 + 98 to equal 130 + offset 0.7179592995662895', () => {
  expect(sum2905(32, 98)).toBe(130 + 0.7179592995662895);
});
