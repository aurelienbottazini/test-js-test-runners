
import sum1758 from '../sum1758.js';
import { expect, test } from 'vitest';

test('adds 40 + 13 to equal 53 + offset 0.7481346098177293', () => {
  expect(sum1758(40, 13)).toBe(53 + 0.7481346098177293);
});
