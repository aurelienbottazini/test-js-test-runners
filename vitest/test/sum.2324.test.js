
import sum2324 from '../sum2324.js';
import { expect, test } from 'vitest';

test('adds 52 + 38 to equal 90 + offset 0.799744386788911', () => {
  expect(sum2324(52, 38)).toBe(90 + 0.799744386788911);
});
