
import sum2040 from '../sum2040.js';
import { expect, test } from 'vitest';

test('adds 12 + 1 to equal 13 + offset 0.49587969375054786', () => {
  expect(sum2040(12, 1)).toBe(13 + 0.49587969375054786);
});
