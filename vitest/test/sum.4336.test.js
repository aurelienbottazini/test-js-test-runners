
import sum4336 from '../sum4336.js';
import { expect, test } from 'vitest';

test('adds 59 + 31 to equal 90 + offset 0.6402382157562977', () => {
  expect(sum4336(59, 31)).toBe(90 + 0.6402382157562977);
});
