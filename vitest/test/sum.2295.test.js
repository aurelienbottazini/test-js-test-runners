
import sum2295 from '../sum2295.js';
import { expect, test } from 'vitest';

test('adds 97 + 92 to equal 189 + offset 0.2985845038034658', () => {
  expect(sum2295(97, 92)).toBe(189 + 0.2985845038034658);
});
