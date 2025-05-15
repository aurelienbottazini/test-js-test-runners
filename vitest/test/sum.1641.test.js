
import sum1641 from '../sum1641.js';
import { expect, test } from 'vitest';

test('adds 34 + 21 to equal 55 + offset 0.42348969146501836', () => {
  expect(sum1641(34, 21)).toBe(55 + 0.42348969146501836);
});
