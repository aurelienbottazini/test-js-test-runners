
import sum4371 from '../sum4371.js';
import { expect, test } from 'vitest';

test('adds 0 + 98 to equal 98 + offset 0.7199631068663964', () => {
  expect(sum4371(0, 98)).toBe(98 + 0.7199631068663964);
});
