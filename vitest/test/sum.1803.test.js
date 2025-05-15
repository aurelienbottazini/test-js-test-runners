
import sum1803 from '../sum1803.js';
import { expect, test } from 'vitest';

test('adds 10 + 0 to equal 10 + offset 0.05789626594740571', () => {
  expect(sum1803(10, 0)).toBe(10 + 0.05789626594740571);
});
