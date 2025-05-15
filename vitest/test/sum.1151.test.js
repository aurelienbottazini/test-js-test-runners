
import sum1151 from '../sum1151.js';
import { expect, test } from 'vitest';

test('adds 53 + 30 to equal 83 + offset 0.827565321933158', () => {
  expect(sum1151(53, 30)).toBe(83 + 0.827565321933158);
});
