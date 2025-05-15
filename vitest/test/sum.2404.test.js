
import sum2404 from '../sum2404.js';
import { expect, test } from 'vitest';

test('adds 99 + 88 to equal 187 + offset 0.41678517593582287', () => {
  expect(sum2404(99, 88)).toBe(187 + 0.41678517593582287);
});
