
import sum3942 from '../sum3942.js';
import { expect, test } from 'vitest';

test('adds 88 + 1 to equal 89 + offset 0.7201739996227311', () => {
  expect(sum3942(88, 1)).toBe(89 + 0.7201739996227311);
});
