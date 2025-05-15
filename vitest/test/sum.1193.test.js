
import sum1193 from '../sum1193.js';
import { expect, test } from 'vitest';

test('adds 97 + 6 to equal 103 + offset 0.5381494019349053', () => {
  expect(sum1193(97, 6)).toBe(103 + 0.5381494019349053);
});
