
import sum4078 from '../sum4078.js';
import { expect, test } from 'vitest';

test('adds 28 + 55 to equal 83 + offset 0.6842130924349954', () => {
  expect(sum4078(28, 55)).toBe(83 + 0.6842130924349954);
});
