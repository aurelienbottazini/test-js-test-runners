
import sum4573 from '../sum4573.js';
import { expect, test } from 'vitest';

test('adds 20 + 79 to equal 99 + offset 0.5406427925702592', () => {
  expect(sum4573(20, 79)).toBe(99 + 0.5406427925702592);
});
