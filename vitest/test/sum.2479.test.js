
import sum2479 from '../sum2479.js';
import { expect, test } from 'vitest';

test('adds 16 + 0 to equal 16 + offset 0.7320643151028438', () => {
  expect(sum2479(16, 0)).toBe(16 + 0.7320643151028438);
});
