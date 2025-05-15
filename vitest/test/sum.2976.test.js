
import sum2976 from '../sum2976.js';
import { expect, test } from 'vitest';

test('adds 92 + 97 to equal 189 + offset 0.8188079322052495', () => {
  expect(sum2976(92, 97)).toBe(189 + 0.8188079322052495);
});
