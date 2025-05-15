
import sum450 from '../sum450.js';
import { expect, test } from 'vitest';

test('adds 72 + 41 to equal 113 + offset 0.6861979359091456', () => {
  expect(sum450(72, 41)).toBe(113 + 0.6861979359091456);
});
