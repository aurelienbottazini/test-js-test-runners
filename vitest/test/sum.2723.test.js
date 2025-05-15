
import sum2723 from '../sum2723.js';
import { expect, test } from 'vitest';

test('adds 75 + 49 to equal 124 + offset 0.3115606238986207', () => {
  expect(sum2723(75, 49)).toBe(124 + 0.3115606238986207);
});
