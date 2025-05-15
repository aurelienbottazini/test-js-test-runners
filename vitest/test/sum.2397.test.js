
import sum2397 from '../sum2397.js';
import { expect, test } from 'vitest';

test('adds 21 + 54 to equal 75 + offset 0.7393498450374961', () => {
  expect(sum2397(21, 54)).toBe(75 + 0.7393498450374961);
});
