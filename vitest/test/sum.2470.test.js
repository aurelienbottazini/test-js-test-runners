
import sum2470 from '../sum2470.js';
import { expect, test } from 'vitest';

test('adds 70 + 52 to equal 122 + offset 0.383777300296966', () => {
  expect(sum2470(70, 52)).toBe(122 + 0.383777300296966);
});
