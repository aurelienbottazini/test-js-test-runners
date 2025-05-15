
import sum3584 from '../sum3584.js';
import { expect, test } from 'vitest';

test('adds 64 + 62 to equal 126 + offset 0.9704415510535755', () => {
  expect(sum3584(64, 62)).toBe(126 + 0.9704415510535755);
});
