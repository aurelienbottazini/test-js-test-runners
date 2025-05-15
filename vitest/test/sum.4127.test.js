
import sum4127 from '../sum4127.js';
import { expect, test } from 'vitest';

test('adds 85 + 30 to equal 115 + offset 0.8284166167058747', () => {
  expect(sum4127(85, 30)).toBe(115 + 0.8284166167058747);
});
