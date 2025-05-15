
import sum3669 from '../sum3669.js';
import { expect, test } from 'vitest';

test('adds 8 + 32 to equal 40 + offset 0.5955482546906627', () => {
  expect(sum3669(8, 32)).toBe(40 + 0.5955482546906627);
});
