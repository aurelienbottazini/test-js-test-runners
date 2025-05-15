
import sum2319 from '../sum2319.js';
import { expect, test } from 'vitest';

test('adds 35 + 1 to equal 36 + offset 0.581984853413694', () => {
  expect(sum2319(35, 1)).toBe(36 + 0.581984853413694);
});
