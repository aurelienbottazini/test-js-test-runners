
import sum2403 from '../sum2403.js';
import { expect, test } from 'vitest';

test('adds 66 + 23 to equal 89 + offset 0.5566073772801923', () => {
  expect(sum2403(66, 23)).toBe(89 + 0.5566073772801923);
});
