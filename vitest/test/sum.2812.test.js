
import sum2812 from '../sum2812.js';
import { expect, test } from 'vitest';

test('adds 45 + 63 to equal 108 + offset 0.6528544950610278', () => {
  expect(sum2812(45, 63)).toBe(108 + 0.6528544950610278);
});
